drop view if exists cellview;
drop view if exists entityview;
drop table if exists mapObjectWhere;
drop table if exists mapUserPlayer;
drop table if exists object;
drop table if exists objectPrototype;
drop table if exists player;
drop table if exists cell;
drop table if exists cellType;

drop table if exists log;
create table log(
	id int auto_increment,
	msg text,
	primary key(id),
	ctime timestamp default current_timestamp
) engine=InnoDB default charset=latin1 comment='';

drop table if exists user;
create table user(
	name varchar(255),
	nickname varchar(255) default "",
	ctime timestamp default current_timestamp,
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table cellType(
	name char(10),
	canmove tinyint(1) default 1 comment '是否能移動',
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table cell(
	x int default 0,
	y int default 0,
	cellType char(10),
	primary key(x,y),
	foreign key(cellType) references cellType(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table player(
	name varchar(255),
	x int default 0,
	y int default 0,
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table objectPrototype(
	name varchar(255),
	objectType varchar(20),
	description text,
	primary key(name, objectType)
) engine=InnoDB default charset=latin1 comment='';

create table object(
	id int auto_increment,
	name varchar(255),
	objectType varchar(20),
	primary key(id),
	foreign key(name,objectType) references objectPrototype(name,objectType) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table mapUserPlayer(
	user varchar(255),
	player varchar(255),
	primary key(user, player),
	foreign key(user) references user(name) on delete cascade,
	foreign key(player) references player(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table mapObjectWhere(
	objectId int,
	whereId tinyint default 0 comment '道具在哪裡(哪個table)。可能在player身上或地上。用這個值來判斷(0-地上, 1-player身上)',
	cellx int default 0 comment '',
	celly int default 0 comment '',
	playerName varchar(255) default 'admin' comment '',
	primary key(objectId) comment '一個物件不可能在兩個地方，所以用objectId當主鍵',
	foreign key(objectId) references object(id) on delete cascade,
	foreign key(playerName) references player(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create view cellview as
select * from cell as c left join cellType as ct on c.cellType = ct.name;

create view entityview as
select p.name as name, 'player' as entityType from player as p
union
select i.name as name, 'item' as entityType from object as i
union
select u.name as name, 'user' as entityType from user as u;

# 用來當成mapItemWhere中的playerName的預設值
# 為了將playerName設為外鍵，必須要有一個預設玩家
insert into player(name) values ('admin');

# 要使用交易所以把自動commit關掉
# 使用以下指令來查詢自動commit狀態:SELECT @@AUTOCOMMIT
# 使用以下指令來查詢隔離層級:SELECT @@tx_isolation
set AUTOCOMMIT=0;

DELIMITER $$
# function或proceduer宣告至少要加入"DETERMINISTIC","NOT DETERMINISTIC","NO SQL","READS SQL DATA"之中一項
# 請參考
# http://stackoverflow.com/questions/26015160/deterministic-no-sql-or-reads-sql-data-in-its-declaration-and-binary-logging-i
# 不然在某些mysql版本會出現之下錯誤
# Error 1418: This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)accessible

# 建立玩家
# 玩家一登入後就呼叫這個取得資訊
# createplayer代表是否自動建立一個遊戲角色
drop procedure if exists getUser $$
create procedure getUser(username varchar(255), createplayer bool) not deterministic begin
	declare hasUser int;
	declare msg char(100);
	# 定義回滾
	declare exit handler for sqlexception begin
		#GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
		#SELECT @sqlstate, @errno, @text;
		GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
		set msg = SUBSTRING(@text,1,100);
		rollback;
		signal sqlstate 'ERROR' set message_text = msg;
	end;
	start transaction;
	select count(name) into hasUser from user where name = username;
	if hasUser = 0 then
		insert into user(name) values (username);
		if createplayer = true then
			# 使用upsert
			# 這樣我就可不用管有沒有重覆鍵值例外
			insert into player(name) values (username) on duplicate key
				update name = username;
			insert into mapUserPlayer(user, player) values (username, username) on duplicate key
				update user = username, player = username;
		end if;
	end if;
	select * from user where name = username;
	commit;
end $$

# 取得地圖
# 指定一個地點為中心和左上的差距
# 每次移動後就呼叫這個取得新的地圖
drop procedure if exists getMap $$
create procedure getMap(x int, y int, l int, t int) not deterministic begin
	declare sx, sy, ex, ey int;
	set sx = x - l;
	set ex = x + l;
	set sy = y - t;
	set ey = y + t;
	# 注意。不要把變數名稱和欄位名稱搞混
	select c.x, c.y, c.cellType, c.canmove from cellview as c where c.x >= sx and c.x < ex and c.y >= sy and c.y < ey;
end $$

# 角色移動
# 輸入玩家和所屬的角色
# 會判斷有沒有角色所有權
drop procedure if exists move $$
create procedure move(username varchar(255), playername varchar(255), ox int, oy int) not deterministic begin
	# 變數宣告都要在handler or cursor宣告之前
	declare isValidPlayer int;
	declare cx, cy int;
	declare isCanMove tinyint;
	declare hasCell tinyint;
	declare msg char(100);
	# 定義回滾
	declare exit handler for sqlexception begin
		GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
		set msg = SUBSTRING(@text,1,100);
		rollback;
		signal sqlstate 'ERROR' set message_text = msg;
	end;
	# 開始交易
	start transaction;
	select exists (select user from mapUserPlayer where (user, player) = (username, playername)) into isValidPlayer;
	if isValidPlayer = 0 then
		signal sqlstate 'ERROR' set message_text = "you don't have this player";
	end if;
	# 取得現在位置
	select x, y into cx, cy from player as p where p.name = playername;
	# 計算下一個位置
	set cx = cx+ox;
	set cy = cy+oy;
	# 先判斷有沒有cell
	select count(*) into hasCell from cell where (x,y) = (cx, cy);
	if hasCell = 1 then
		# 判斷指定的cell能不能移動
		select canmove into isCanMove from cellType where name in (select cellType from cell where (x,y) = (cx,cy));
	else
		set isCanMove = 1;
	end if;
	insert into log(msg) values (concat('(name, x,y,move)', playername, ',',cx,',',cy,',',isCanMove));
	if isCanMove then
		update player set x = cx, y = cy where name = playername;
	end if;
	commit;
end $$

drop procedure if exists createObject $$
create procedure createObject(objectName varchar(255), objectType varchar(10), whereId tinyint, x int, y int, playerName varchar(255)) not deterministic begin
	declare isValidItem int;
	declare hasPlayer int;
	declare newItemId int;
	# msg要宣告在外面
	declare msg char(100);
	# 定義回滾
	declare exit handler for sqlexception begin
		GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
		set msg = SUBSTRING(@text,1,100);
		rollback;
		signal sqlstate 'ERROR' set message_text = msg;
	end;
	start transaction;
	select exists (select name from objectPrototype where (name,objectType) = (objectName,objectType)) into isValidItem;
	if isValidItem = 0 then
		signal sqlstate 'ERROR' set message_text = 'no this item';
	end if;
	insert into object(name,objectType) values (objectName,objectType);
	# 要注意：select into不能超過一個row, 不然會出現下列例外
	# Error Code: 1172. Result consisted of more than one row
	# 使用last_insert_id()取得最後一個auto_increment的id
	select last_insert_id() into newItemId;
	if whereId = 0 then
		insert into mapObjectWhere(objectId, whereId, cellx, celly) values (newItemId, whereId, x, y);
	else
		select count(name) into hasPlayer from player where name = playerName;
		if hasPlayer = 1 then
			insert into mapObjectWhere(objectId, whereId, playerName) values (newItemId, whereId, playerName);
		else
			signal sqlstate 'ERROR' set message_text = 'player is not exist';
		end if;
	end if;
	commit;
end $$

drop procedure if exists testErr $$
create procedure testErr() not deterministic begin
	# msg要宣告在外面
	declare msg char(100);
	declare exit handler for sqlexception begin
		GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
		set msg = SUBSTRING(@text,1,100);
		rollback;
		signal sqlstate 'ERROR' set message_text = msg;
	end;
	signal sqlstate 'ERROR' set message_text = 'player is not existplayer is not existplayer is not existplayer is not existplayer is not existplayer is not exist';
end $$

drop procedure if exists test $$
create procedure test() not deterministic begin
	start transaction;
	insert into user(name) values ('han');
	insert into player(name) values ('han');
	insert into mapUserPlayer(user, player) values ('han','han');
	insert into cellType(name,canmove) values ('plain',1);
	insert into cellType(name,canmove) values ('mountain',0);
	insert into cell(x,y,cellType) values (100,20,'plain');
	insert into cell(x,y,cellType) values (100,21,'mountain');
	call move('han','han',100,20);
	call move('han','han',0,1);
	call move('han','han',1,0);
	insert into objectPrototype(name,objectType) values ('posion','item');
	call createObject('posion', 'item', 0, 1, 1, '');
	call createObject('posion', 'item', 1, 0, 0, 'han');
	insert into objectPrototype(name,objectType) values ('tree','ground');
	call createObject('tree', 'ground', 0, 1, 1, '');
	commit;
end $$

call test() $$

DELIMITER ;
