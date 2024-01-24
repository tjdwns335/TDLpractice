import React, { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '리엑트 공부', detail: '공부합시다', isDone: false },
    { id: 2, title: 'test', detail: 'test', isDone: true },
  ]);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const addHandler = (e) => {
    e.preventDefault();
    const newTodoList = {
      id: Date.now(),
      title,
      detail,
      isDone: false,
    }
    setTodoList([...todoList, newTodoList])
  }
  const titleChange = (e) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
  }
  const detailChange = (e) => {
    const detailValue = e.target.value;
    setDetail(detailValue);
  }
  const removeHandler = (id) => {
    const newTodoList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(newTodoList);
  }
  const doneClick = (id) => {
    const newTodo = todoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item
    })
    setTodoList(newTodo);
  }

  return (
    <div className="basic">
      <header>
        <h1>My todo List</h1>
      </header>
      <form>
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={titleChange}
        />
        <label>내용</label>
        <input
          type="text"
          value={detail}
          onChange={detailChange}
        />
        <button onClick={(e) => addHandler(e)}>추가하기</button>
      </form>
      <div className='todo-warp'>
        {
          todoList.map((item) => {
            return (
              <div className='todo-list' key={item.id}>
                <h2>{item.isDone ? "done" : "Working"}</h2>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div>
                  <button onClick={() => removeHandler(item.id)}>삭제</button>
                  <button onClick={() => doneClick(item.id)}>{item.isDone ? "취소" : "완료"}</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default App