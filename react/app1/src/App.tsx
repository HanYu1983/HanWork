import React from 'react';
import logo from './logo.svg';
import './App.css';

import { map } from "rxjs/operators"
import { bind, Subscribe  } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import Todo from "./Todo"

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
const [textChange$, setText] = createSignal<string>();

const [useText, text$] = bind<string>(textChange$, "")

function TextInput() {
  const text = useText()

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  )
}

const [useCharCount, charCount$] = bind(
  text$.pipe(
    map((text) => text.length)
  )
)

function CharacterCount() {
  const count = useCharCount()
  return <>Character Count: {count}</>
}

function CharacterCounter() {
  return (
    <div>
      <Subscribe>
        <TextInput />
        <CharacterCount />
      </Subscribe>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextInput></TextInput>
        <CharacterCounter></CharacterCounter>
        <Todo></Todo>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
