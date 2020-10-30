import React from 'react';

const TodoItem = ({ item, handleChangeComplete }) => {

  return (
    <li
      className={`todoItem ${item.completed ? 'completed' : ''}`}
      onClick={() => handleChangeComplete(item.id, !item.completed)}
    >
      {item.title}
      <input
        className="checkboxInput"
        type="checkbox"
        checked={item.completed}
        readOnly
      />
      <span className="checkboxMark"></span>
    </li>
  );
}




export default TodoItem;