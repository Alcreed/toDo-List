import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
  const {item: toDoList, saveItemList: saveToDoList, loading, error} = useLocalStorage('toDoList_V1', []);
  const [searchTask, setSearchTask] = useState("");
  const [createTaskText, setCreateTaskText] = useState("");
  // const [toDoList, setToDoList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const generateId = () => Math.random().toString(36).substring(2, 9);
  const completedToDoList = toDoList.filter(toDo => toDo.completed).length;
  const totalToDoList = toDoList.length;

  const onCreateTask = () => {
    let createTask = {
      id: generateId(),
      text: createTaskText,
      completed: false
    };

    saveToDoList([...toDoList, createTask]);
    setCreateTaskText("");
  };

  const filterTasks = (item) => {
    return (item.text).toLowerCase().includes(searchTask.toLowerCase());
  };

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
        onDelete,
        setCreateTaskText,
        createTaskText
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider };
