import React, { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '리엑트 공부', detail: '공부합시다', isDone: false },
    { id: 2, title: '리엑트 공부', detail: '공부합시다', isDone: true }
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
      <div>
        <h3>{title}</h3>
        <p>{detail}</p>
        <div>
          <button>삭제</button>
          <button>완료</button>
        </div>
      </div>
    </div>
  )
}

export default App