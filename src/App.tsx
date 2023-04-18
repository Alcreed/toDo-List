import React from 'react';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoInput } from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';
import './App.css';

const toDoList = [
  { id: 0, text: 'Tarea 1', completed: false },
  { id: 1, text: 'Tarea 2', completed: false },
  { id: 2, text: 'Tarea 3', completed: false },
  { id: 3, text: 'Tarea 4', completed: false },
]

function App(): JSX.Element {
  return (
    <main className='ToDo_container'>
      <section className='ToDo_section'>
        <article className='ToDo_section_create'>
          <h2 className='ToDo_section_create-title'>Create new task</h2>
          <ToDoInput
            className='ToDo_input'
            placeholder='Create new task'
            onChange={(e) => console.log(e.target.value)}
          />
          <CreateToDoButton
            className='CreateToDo_button'
          />
        </article>
      </section>
      <section className='ToDo_section'>
        <ToDoCounter />
        <ToDoInput
          className='ToDo_input'
          placeholder='Search a task'
          onChange={(e) => console.log(e.target.value)}
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
      </section>
    </main>
  );
}

export default App;
