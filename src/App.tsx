import React from 'react';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoInput } from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';
import './App.css';

const toDoList = [
  { id: 0, text: 'Tarea 1', completed: true },
  { id: 1, text: 'Tarea 2', completed: false },
  { id: 2, text: 'Tarea 3', completed: false },
  { id: 3, text: 'Tarea 4', completed: false },
]

function App(): JSX.Element {

  const onCreateTask = (value: string) => {
    console.log(value);
  };

  const onSearchTask = (value: string) => {
    console.log(value);
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
            onChange={(e) => onSearchTask(e.target.value)}
          />
          <ToDoList>
            {toDoList.length > 0 &&
              toDoList.map(item => {
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
