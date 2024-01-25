import React, { useState } from 'react'
import Header from './components/header';
import Form from './components/Form';
import TodoListContent from './components/TodoListContent';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: Date.now() + 1,
      title: '리엑트 공부',
      detail: '공부합시다',
      isDone: false,
    },
    {
      id: Date.now() + 2,
      title: 'test',
      detail: 'test',
      isDone: true,
    },
  ]);

  return (
    <div className="basic">
      <Header></Header>
      <Form
        todoList={todoList}
        setTodoList={setTodoList} />
      <TodoListContent
        todoList={todoList}
        setTodoList={setTodoList}
        isActive={false} />
      <TodoListContent
        todoList={todoList}
        setTodoList={setTodoList}
        isActive={true} />
    </div >
  )
}

export default App