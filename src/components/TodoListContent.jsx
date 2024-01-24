import React from 'react'
import '../App.css'

function TodoListContent({ todoList, setTodoList, isActive }) {
  const removeHandler = (id) => {
    const newTodoList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(newTodoList);
  }
  const doneClick = (id) => {
    const newTodo = todoList.filter(() => isActive ? true : false).map((item) => {
      return item.id === id ? { ...item, isDone: !isDone } : item
    })
    setTodoList(newTodo);
  }

  return (
    <div className='todo-warp'>
      {
        todoList.map((item) => {
          return (
            <div className='todo-list' key={item.id}>
              <h2>{isActive ? 'Done' : 'Working'}</h2>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div>
                <button onClick={() => removeHandler(item.id)}>삭제</button>
                <button onClick={() => doneClick(item.id)}>{isActive ? '취소' : '완료'}</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoListContent;