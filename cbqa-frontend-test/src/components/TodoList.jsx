import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list, handleChangeComplete }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const incompleteItems = list.filter((item) => !item.completed);
  const completeItems = list.filter((item) => item.completed);

  return (
    <>
      <ul>
        {(showCompleted ? list : incompleteItems).map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            handleChangeComplete={handleChangeComplete}
          />
        ))}
      </ul>

      {completeItems.length > 0 && (
        <button
          className="button-show-completed"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted
            ? 'Ocultar completados'
            : `${completeItems.length} Completados`
          }
        </button>
      )}
    </>
  );
};

export default TodoList;
