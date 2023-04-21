import React, { useState } from 'react';

import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoInput } from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';

import './App.css';

interface ITask {
  id: number,
  text: string,
  completed: boolean
}

/* -- Custom hook
  type ItemHook = 'toDoList_V1';

  function useLocalStorage(itemName: ItemHook, initialValue: unknown) {

    const localStorageItem: (string | null) = localStorage.getItem(itemName);
    let parsedItem: ITask[] = localStorageItem ? JSON.parse(localStorageItem) : [];

    if (!localStorageItem) localStorage.setItem(itemName, JSON.stringify(initialValue));

    const [item, setItem] = useState<ITask[]>(parsedItem);

    const saveItemList = (newItemList: ITask[]): void => {
      localStorage.setItem(itemName, JSON.stringify(newItemList));
      setItem(newItemList);
    };

    return [
      item,
      saveItemList
    ];
  }
*/

function App(): JSX.Element {

  const localStorageToDo: (string | null) = localStorage.getItem('toDoList_V1');
  let parsedToDoList: ITask[] = localStorageToDo ? JSON.parse(localStorageToDo) : [];

  if (!localStorageToDo) localStorage.setItem('toDoList_V1', JSON.stringify([]));

  // const [toDoList, saveToDoList] = useLocalStorage('toDoList_V1', []);
  const [searchTask, setSearchTask] = useState<string>("");
  const [toDoList, setToDoList] = useState<ITask[]>(parsedToDoList);

  const completedToDoList = toDoList.filter(toDo => toDo.completed).length;
  const totalToDoList = toDoList.length;

  const onCreateTask = (value: string) => {
    console.log(value);
  };

  const filterTasks = (item: ITask): boolean => {
    return (item.text).toLowerCase().includes(searchTask.toLowerCase());
  };

  const saveToDoList = (newTodoList: ITask[]): void => {
    localStorage.setItem('toDoList_V1', JSON.stringify(newTodoList));
    setToDoList(newTodoList);
  };

  const onComplete = (id: number) => {
    let newTodoList = toDoList.map(toDo => {
      if (toDo.id === id) {
        return { ...toDo, completed: toDo.completed ? false : true }
      } else {
        return toDo
      }
    });

    saveToDoList(newTodoList);
  };

  const onDelete = (id: number) => {
    let deleteFromTodoList = toDoList.filter(toDo => toDo.id !== id);
    saveToDoList(deleteFromTodoList);
  };

  return (
    <main className='ToDo_container'>
      <section className='ToDo_section'>
        <article className='ToDo_section_create'>
          <h2 className='ToDo_section_create-title'>Create new task</h2>
          <ToDoInput
            className='ToDo_input'
            placeholder='Create new task'
            onChange={(e) => onCreateTask(e.target.value)}
          />
          <CreateToDoButton />
        </article>
      </section>
      <section className='ToDo_section'>
        <article className='ToDo_section_list'>
          <ToDoCounter
            completedToDo={completedToDoList}
            total={totalToDoList}
          />
          <ToDoInput
            className='ToDo_input'
            placeholder='Search a task'
            onChange={(e) => setSearchTask(e.target.value)}
          />
          <ToDoList>
            {toDoList.length > 0 &&
              toDoList.filter(item => filterTasks(item)).map(item => {
                return (
                  <ToDoItem
                    key = {item.id}
                    item = {item}
                    onComplete = {() => onComplete(item.id)}
                    onDelete = {() => onDelete(item.id)}
                  />
                )
              })
            }
          </ToDoList>
        </article>
      </section>
    </main>
  );
}

export default App;
