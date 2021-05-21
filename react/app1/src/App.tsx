import React from 'react';
import logo from './logo.svg';
//import './App.css';

import { map } from "rxjs/operators"
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import Todo from "./Todo"
import App2 from "./App2"

// RCE CSS
import 'react-chat-elements/dist/main.css';
const { ChatItem, MessageBox, MessageList, Dropdown, Avatar } = require("react-chat-elements")

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
        <ChatItem
          avatar={'https://facebook.github.io/react/img/logo.svg'}
          alt={'Reactjs'}
          title={'Facebook'}
          subtitle={'What are you doing?'}
          date={new Date()}
          unread={0} />
        <ChatItem
          avatar={'https://facebook.github.io/react/img/logo.svg'}
          alt={'Reactjs'}
          title={'Facebook'}
          subtitle={'What are you doing?'}
          date={new Date()}
          unread={0} />
        <MessageBox
          textColor="red"
          position={'left'}
          type={'text'}
          text={'react.svg'}
          data={{
            uri: 'https://facebook.github.io/react/img/logo.svg',
            status: {
              click: false,
              loading: 0,
            }
          }} />
        <MessageBox
          reply={{
            photoURL: 'https://facebook.github.io/react/img/logo.svg',
            title: 'elit magna',
            titleColor: '#8717ae',
            messageColor: '#8717ae',
            message: 'Aliqua amet incididunt id nostrud',
          }}
          onReplyMessageClick={() => console.log('reply clicked!')}
          position={'left'}
          type={'text'}
          textColor={'#8717ae'}
          text={'Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.'} />

        <MessageList
          className='message-list'
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={[
            {
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
            {
              reply: {
                photoURL: 'https://facebook.github.io/react/img/logo.svg',
                title: 'elit magna',
                titleColor: '#8717ae',
                messageColor: '#8717ae',
                message: 'Aliqua amet incididunt id nostrud',
              },
              position: "left",
              type: "text",
              text: 'Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.'
            },
            {
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
            {
              color: 'black',
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
          ]} />

        <Dropdown
          buttonProps={{
            text: 'Dropdown',
          }}
          items={[
            {
              icon: {
                float: 'left',
                color: 'red',
                size: 22,
              },
              text: 'lorem'
            },
            {
              icon: {
                float: 'left',
                color: 'purple',
                size: 22,
              },
              text: 'ipsum'
            },
            {
              text: 'dolor'
            },
          ]} />
<Avatar
    src={'https://facebook.github.io/react/img/logo.svg'}
    alt={'logo'}
    size="large"
    type="circle flexible"/>

    <App2></App2>
      </header>
    </div>
  );
}

export default App;
