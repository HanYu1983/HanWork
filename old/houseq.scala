package test
/*
1、英国人住红色房子
2、瑞典人养狗
3、丹麦人喝茶
4、绿房子紧挨着白房子，在白房子的左边
5、绿色房子主人喝咖啡
6、抽PallMall香烟的人养鸟
7、黄色房子主人抽Dunhill香烟
8、住在中间房子的人喝牛奶
9、挪威人住第一间房
10、抽Blends香烟的人住在养猫的人隔壁
11、养马的人住抽Dunhill香烟的人隔壁
12、抽BlueMaster的人喝啤酒
13、德国人抽Prince香烟
14、挪威人住蓝色房子隔壁
15、抽Blends香烟的人有一个喝水的邻居
*/
object main {
  //==== 定義資料 ==== //
  object People extends Enumeration {
    val english, sweden, denmark, norway, germany = Value
  }
  object Color extends Enumeration {
    val red, white, green, yellow, blue = Value
  }
  object Pet extends Enumeration {
    val bird, dog, horse, cat, fish = Value
  }
  object Drink extends Enumeration {
    val tea, coffee, milk, water, beer = Value
  }
  object Smoke extends Enumeration {
    val pallMall, dunhill, blends, blueMaster, prince = Value
  }
  case class House(
    people: People.Value,
    color: Color.Value,
    pet: Pet.Value,
    drink: Drink.Value,
    smoke: Smoke.Value
  )
  // ==== 定義規則 ==== //
  // 英国人住红色房子
  def rule1(group: List[House]): Boolean = {
    group.exists(house => {
      (house.color, house.people) == (Color.red, People.english)
    })
  }
  // 瑞典人养狗
  def rule2(group: List[House]): Boolean = {
    group.exists(house => {
      (house.pet, house.people) == (Pet.dog, People.sweden)
    })
  }
  // 丹麦人喝茶
  def rule3(group: List[House]): Boolean = {
    group.exists(house => {
      (house.drink, house.people) == (Drink.tea, People.denmark)
    })
  }
  // 绿房子紧挨着白房子，在白房子的左边
  def rule4(group: List[House]): Boolean = {
    val wid = group.indexOf(group.find(_.color == Color.white).get)
    if (wid == 0) false else
    {
      group(wid - 1).color == Color.green
    }
  }
  // 绿色房子主人喝咖啡
  def rule5(group: List[House]): Boolean = {
    group.exists(house => {
      (house.color, house.drink) == (Color.green, Drink.coffee)
    })
  }
  // 抽PallMall香烟的人养鸟
  def rule6(group: List[House]): Boolean = {
    group.exists(house => {
      (house.smoke, house.pet) == (Smoke.pallMall, Pet.bird)
    })
  }
  // 黄色房子主人抽Dunhill香烟
  def rule7(group: List[House]): Boolean = {
    group.exists(house => {
      (house.color, house.smoke) == (Color.yellow, Smoke.dunhill)
    })
  }
  // 住在中间房子的人喝牛奶
  def rule8(group: List[House]): Boolean = {
    group(2).drink == Drink.milk
  }
  // 挪威人住第一间房
  def rule9(group: List[House]): Boolean = {
    group.first.people == People.norway
  }
  // 抽Blends香烟的人住在养猫的人隔壁
  def rule10(group: List[House]): Boolean = {
    val t1 = group.indexOf( group.find(_.smoke == Smoke.blends).get )
    val t2 = group.indexOf( group.find(_.pet == Pet.cat).get )
    Math.abs(t1- t2) == 1
  }
  // 养马的人住抽Dunhill香烟的人隔壁
  def rule11(group: List[House]): Boolean = {
    val t1 = group.indexOf( group.find(_.pet == Pet.horse).get )
    val t2 = group.indexOf( group.find(_.smoke == Smoke.dunhill).get )
    Math.abs(t1- t2) == 1
  }
  // 抽BlueMaster的人喝啤酒
  def rule12(group: List[House]): Boolean = {
    group.exists(house => {
      (house.smoke, house.drink) == (Smoke.blueMaster, Drink.beer)
    })
  }
  // 德国人抽Prince香烟
  def rule13(group: List[House]): Boolean = {
    group.exists(house => {
      (house.people, house.smoke) == (People.germany, Smoke.prince)
    })
  }
  // 挪威人住蓝色房子隔壁
  def rule14(group: List[House]): Boolean = {
    val t1 = group.indexOf( group.find(_.people == People.norway).get )
    val t2 = group.indexOf( group.find(_.color == Color.blue).get )
    Math.abs(t1- t2) == 1
  }
  // 抽Blends香烟的人有一个喝水的邻居
  def rule15(group: List[House]): Boolean = {
    val t1 = group.indexOf( group.find(_.smoke == Smoke.blends).get )
    val t2 = group.indexOf( group.find(_.drink == Drink.water).get )
    Math.abs(t1- t2) == 1
  }
  // ==== 以下將使用退火演算法 ==== //
  // 先定義改變資料的方式
  // 改變將房間的順序
  def changeHouse(group:List[House]):List[House]={
    def recur(ne:List[House], old:List[House]):List[House]={
      if(old.isEmpty) ne else
      {
        val select = old((Math.random* old.size).toInt)
        recur(select::ne, old-select)
      }
    }
    recur(List[House](), group)
  }
  // 交換房子內容物
  // 單純選出任意2個房子並交換裡面其中一樣東西
  // 如果選出的2個房子為同一間房，則繼續選擇直到有交換到
  def changeProperty(group:List[House]):List[House]={
    val ia = (Math.random* group.size).toInt
    val ib = (Math.random* group.size).toInt
    val a = group(ia)
    val b = group(ib)
    if( ia == ib ) changeProperty(group) else
    {
      // 將a房和b房交換
      def swap(na:House, nb:House):List[House]={
        // 將本來位置上的同一房子替換
        val step1 = group.filter(group.indexOf(_)< ia) ++ (na :: group.filter(group.indexOf(_)> ia))
        val step2 = step1.filter(step1.indexOf(_)< ib) ++ (nb :: step1.filter(step1.indexOf(_)> ib))
        step2
      }
      (Math.random* 5).toInt match{
        case 0=>swap( House(b.people, a.color, a.pet, a.drink, a.smoke ), House(a.people, b.color, b.pet, b.drink, b.smoke ))
        case 1=>swap( House(a.people, b.color, a.pet, a.drink, a.smoke ), House(b.people, a.color, b.pet, b.drink, b.smoke ))
        case 2=>swap( House(a.people, a.color, b.pet, a.drink, a.smoke ), House(b.people, b.color, a.pet, b.drink, b.smoke ))
        case 3=>swap( House(a.people, a.color, a.pet, b.drink, a.smoke ), House(b.people, b.color, b.pet, a.drink, b.smoke ))
        case 4=>swap( House(a.people, a.color, a.pet, a.drink, b.smoke ), House(b.people, b.color, b.pet, b.drink, a.smoke ))
      }
    }
  }
  // 隨機初使化狀態(房子和內容物)
  def initGroup: List[House] =
    (0 to 4 toList).foldLeft(List[House]())((list, id) => {
      House(People.apply(id), Color.apply(id), Pet.apply(id), Drink.apply(id), Smoke.apply(id)) :: list
    })
  // 隨機改變狀態
  def mutate(group: List[House]): List[House] = {
    Math.random match{
      case v if v> .8=>
        changeHouse(group)
      case _=>
        changeProperty(group)
    }
  }
  // 問題
  // 哪一個國家的人養魚
  def findResult(group: List[House]): House = {
    group.find(_.pet == Pet.fish).get
  }
  // 計算分數
  // 依序套用之前定義的規則
  // 越多成立就越高分
  def calcScore(group: List[House], fns: List[(List[House]) => Boolean]): Int = {
    fns.foldLeft(0)((score, fn) => {
      if (fn(group)) score + 1 else score
    })
  }
  // 退火演算法
  def alg(group: List[House], fns: List[(List[House]) => Boolean]): Any = {
    def recur(group: List[House], score: Int, fns: List[(List[House]) => Boolean], calcCount: Int): Any = {
      // 若所有規則符合，就是答案
      if (score == fns.size)
        List(calcCount, findResult(group).people, group)
      // 限制計算次數上限
      else if (calcCount == 2000000)
        "result not found"
      else {
        // 每次都隨機改變狀態並計算分數有沒有比上一次還高
        // 有的話，就用新的狀態；不然，就用舊的
        val newGroup = mutate(group)
        val newScore = calcScore(newGroup, fns)
        // 加入隨機機率無論分數高低使用新的狀態
        // 為了跳脫局部最佳解
        if (newScore > score || Math.random < .1)
          recur(newGroup, newScore, fns, calcCount + 1)
        else
          recur(group, score, fns, calcCount + 1)
      }
    }
    recur(group, calcScore(group, fns), fns, 0)
  }
  def time(fn:()=>Any){
    val start= System.currentTimeMillis()
    fn()
    val elapsed = System.currentTimeMillis()- start
    println("Elapsed time: "+elapsed+" msecs")
  }
  def main(args: Array[String]): Unit = {
    val fns = List[(List[House] => Boolean)](rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14, rule15)
    for( i 
        time(()=>{ println(alg(initGroup, fns)) })
  }
}

// Output
/* 
List(897193, germany, List(House(norway,yellow,cat,water,dunhill), House(denmark,blue,horse,tea,blends), House(english,red,bird,milk,pallMall), House(germany,green,fish,coffee,prince), House(sweden,white,dog,beer,blueMaster)))
Elapsed time: 19434 msecs
List(1627548, germany, List(House(norway,yellow,cat,water,dunhill), House(denmark,blue,horse,tea,blends), House(english,red,bird,milk,pallMall), House(germany,green,fish,coffee,prince), House(sweden,white,dog,beer,blueMaster)))
Elapsed time: 34913 msecs
*/