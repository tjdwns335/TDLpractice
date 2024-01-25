import React from 'react'
import '../App.css'

function TodoListContent({ todoList, setTodoList, isActive }) {
  const removeHandler = (id) => {
    const newTodoList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(newTodoList);
  }
  const doneClick = (id) => {
    const newTodo = todoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item
    })
    console.log('test');
    setTodoList(newTodo);
  }

  return (
    <div className='todo-warp' key={todoList.id}>
      {
        todoList.filter((item) => isActive === item.isDone ? true : false)
          .map((item) => {
            return (
              <div>
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