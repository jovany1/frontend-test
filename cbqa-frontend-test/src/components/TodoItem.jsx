import React from 'react';
import { ToDoItem, CustomCheckbox, CheckboxMark } from './styles/ListToDo';
const TodoItem = ({ item, handleChangeComplete }) => {

  return (
    <ToDoItem
      isCompleted={item.completed}
      onClick={() => handleChangeComplete(item.id, !item.completed)}
    >
      {item.title}
      <CustomCheckbox
        className="checkboxInput"
        type="checkbox"
        checked={item.completed}
        readOnly
      />
      <CheckboxMark />
    </ToDoItem>
  );
}




export default TodoItem;