package core

import (
	"appengine"
	"net/url"
)

type Command struct {
	ID          int
	User        string
	Description string
	Parameters  url.Values
	Block       int
	Reason      string
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

func NewProcedure(ctx appengine.Context) Procedure {
	return Procedure{}
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
	// 不能將block從列表中刪去，不然整個Block的ID都會亂掉
	// 直接將指令指針移到最後就行了
	p.Block[blockId].Cursor = len(p.Block[blockId].Command)
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
	return p
}
