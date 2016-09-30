package main

import (
	"fmt"
	_ "github.com/Shopify/go-lua"
	"github.com/robertkrimen/otto"
)

func main() {
	/*
		l := lua.NewState()
		lua.OpenLibraries(l)
		if err := lua.DoFile(l, "hello.lua"); err != nil {
			panic(err)
		}
	*/
	vm := otto.New()
	vm.Set("sayHello", func(call otto.FunctionCall) otto.Value {
		fmt.Printf("Hello, %s.\n", call.Argument(0).String())
		return otto.Value{}
	})

	result, err := vm.Run(`
		sayHello("Xyzzy");      // Hello, Xyzzy.
		sayHello();             // Hello, undefined
		result = 4
	`)
	fmt.Printf("result:%#v", result)

	if err != nil {
		panic(err)
	}
}
