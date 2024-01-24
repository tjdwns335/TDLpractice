import React, { useState } from 'react'

function Form({ todoList, setTodoList }) {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const titleChange = (e) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
  }
  const detailChange = (e) => {
    const detailValue = e.target.value;
    setDetail(detailValue);
  }
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
  return (
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
  )
}

export default Form;