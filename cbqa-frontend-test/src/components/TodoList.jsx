import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Button from '../components/styles/Button';

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
        <Button onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted
            ? 'Hide Completed'
            : `${completeItems.length} Completed`
          }
        </Button>
      )}
    </>
  );
};

export default TodoList;
