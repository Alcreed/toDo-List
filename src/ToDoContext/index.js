import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
  const {item: toDoList, saveItemList: saveToDoList, loading, error} = useLocalStorage('toDoList_V1', []);
  const [searchTask, setSearchTask] = useState("");
  // const [toDoList, setToDoList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const completedToDoList = toDoList.filter(toDo => toDo.completed).length;
  const totalToDoList = toDoList.length;

  const onCreateTask = (value) => {
    console.log(value);
  };

  const filterTasks = (item) => {
    return (item.text).toLowerCase().includes(searchTask.toLowerCase());
  };

  // const saveToDoList = (newTodoList) => {
  //   try {
  //     localStorage.setItem('toDoList_V1', JSON.stringify(newTodoList));
  //     setToDoList(newTodoList);
  //   } catch(error) {
  //     setError(true);
  //   }
  // };

  const onComplete = (id) => {
    let newTodoList = toDoList.map(toDo => {
      if (toDo.id === id) {
        return { ...toDo, completed: toDo.completed ? false : true }
      } else {
        return toDo
      }
    });

    saveToDoList(newTodoList);
  };

  const onDelete = (id) => {
    let deleteFromTodoList = toDoList.filter(toDo => toDo.id !== id);
    saveToDoList(deleteFromTodoList);
  };

  return(
    <ToDoContext.Provider
      value={{
        loading,
        error,
        toDoList,
        completedToDoList,
        totalToDoList,
        onCreateTask,
        filterTasks,
        setSearchTask,
        onComplete,
        onDelete
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider };
