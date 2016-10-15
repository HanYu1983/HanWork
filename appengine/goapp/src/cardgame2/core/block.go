package core

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
)

type Key struct {
	Kind     string
	StringID string
	IntID    int
}

type Command struct {
	ID          int
	User        string
	Description string
	Parameters  map[string]interface{}
	Block       int
	Source      Key
}

type Block struct {
	ID      int
	Name    string
	Cursor  int
	Command []int
}

type Procedure struct {
	Command []Command
	Block   []Block
}

func AddBlock(ctx appengine.Context, p Procedure, name string, cs []Command) Procedure {
	blockId := len(p.Block)
	var ids []int
	for _, c := range cs {
		id := len(p.Command)
		c.ID = id
		c.Block = blockId
		p.Command = append(p.Command, c)
		ids = append(ids, id)
	}
	p.Block = append(p.Block, Block{ID: blockId, Name: name, Command: ids})
	return p
}

func DeleteBlock(ctx appengine.Context, p Procedure, blockId int) Procedure {
	head := p.Block[:blockId]
	tail := p.Block[blockId+1:]
	p.Block = append(head, tail...)
	return p
}

func GetCommand(ctx appengine.Context, p Procedure) (Command, bool) {
	blockLen := len(p.Block)
	if blockLen == 0 {
		return Command{}, false
	}
	var topBlock Block
	topBlock = p.Block[blockLen-1]
	for topBlock.Cursor >= len(topBlock.Command) {
		if topBlock.ID == 0 {
			break
		}
		topBlock = p.Block[topBlock.ID-1]
	}
	if topBlock.Cursor >= len(topBlock.Command) {
		return Command{}, false
	}
	cmdId := topBlock.Command[topBlock.Cursor]
	return p.Command[cmdId], true
}

func CompleteCommand(ctx appengine.Context, p Procedure, c Command) Procedure {
	p.Command[c.ID] = c
	block := p.Block[c.Block]
	if block.Command[block.Cursor] == c.ID {
		block.Cursor += 1
	}
	p.Block[c.Block] = block
	//p.Block[c.Block].Cursor += 1
	return p
}

type ByteWrapper struct {
	Byte []byte
}

func ProcedureKey(ctx appengine.Context, gameId string) *datastore.Key {
	return datastore.NewKey(ctx, "Procedure", "only one", 0, GameKey(ctx, gameId))
}

func LoadProcedure(ctx appengine.Context, gameId string) (Procedure, error) {
	var w ByteWrapper
	var err error
	key := ProcedureKey(ctx, gameId)
	err = datastore.Get(ctx, key, &w)
	if err == datastore.ErrNoSuchEntity {
		p := NewProcedure(ctx)
		err = SaveProcedure(ctx, gameId, p)
		if err != nil {
			return Procedure{}, err
		}
		return p, nil
	} else if err != nil {
		return Procedure{}, err
	}
	var p Procedure
	err = json.Unmarshal(w.Byte, &p)
	if err != nil {
		return Procedure{}, err
	}
	return p, nil
}

func SaveProcedure(ctx appengine.Context, gameId string, p Procedure) error {
	key := ProcedureKey(ctx, gameId)
	b, err := json.Marshal(p)
	if err != nil {
		return err
	}
	w := ByteWrapper{b}
	_, err = datastore.Put(ctx, key, &w)
	if err != nil {
		return err
	}
	return nil
}

func NewProcedure(ctx appengine.Context) Procedure {
	return Procedure{}
}
