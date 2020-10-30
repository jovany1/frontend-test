import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';


const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeComplete = (userKey, taskId, newStatus) => {
    const newTodoListState = {...todoList};
    const taskIndex = newTodoListState[userKey].findIndex(item => item.id === taskId);
    newTodoListState[userKey][taskIndex].completed = newStatus;

    setTodoList(newTodoListState);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        setIsLoading(false);
        return response.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          const todoData = data.reduce((r, a) => {
            r[a.userId] = [...r[a.userId] || [], a];
            return r;
          }, {});

          setTodoList(todoData);
        }
      })
      .catch((error) => {
        console.log('Error:' + error.message);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="http://jovany.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jovany
        </a>
      </header>

      {isLoading && <img src={logo} className="App-logo" alt="logo" />}

      <main>
        {Object.keys(todoList).map((key) => (
          <div className="user-list" key={`user-${key}`}>
            <h5>User ID: {key}</h5>

            <TodoList
              list={todoList[key]}
              handleChangeComplete={(taskId, newValue) => handleChangeComplete(key, taskId, newValue)}
            />

          </div>
        ))}
      </main>

    </div>
  );
}

export default App;
