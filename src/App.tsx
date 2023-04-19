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

function App(): JSX.Element {

  const [searchTask, setSearchTask] = useState<string>("");
  const [toDoList, setToDoList] = useState<ITask[]>([
    { id: 0, text: 'Tarea 1', completed: true },
    { id: 1, text: 'Tarea 2', completed: false },
    { id: 2, text: 'Tarea 3', completed: false },
    { id: 3, text: 'Tarea 4', completed: false },
  ]);

  const onCreateTask = (value: string) => {
    console.log(value);
  };

  const filterTasks = (item: ITask): boolean => {
    return (item.text).toLowerCase().includes(searchTask.toLowerCase());
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
          <ToDoCounter />
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
