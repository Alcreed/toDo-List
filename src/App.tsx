import React, { useContext } from 'react';
import { ToDoContext } from './ToDoContext';

import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoInput } from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';

import './App.css';

function App(): JSX.Element {
  const { error, loading, toDoList, setSearchTask, filterTasks, onComplete, onDelete, setCreateTaskText, onCreateTask, createTaskText } = useContext(ToDoContext);

  return (
    <main className='ToDo_container'>
      <section className='ToDo_section'>
        <article className='ToDo_section_create'>
          <h2 className='ToDo_section_create-title'>Create new task</h2>
          <ToDoInput
            className='ToDo_input'
            placeholder='Create new task'
            value={createTaskText}
            onChange={(e) => setCreateTaskText(e.target.value)}
          />
          <CreateToDoButton
            onClick={onCreateTask}
          />
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
            {error && <p>Error</p>}
            {loading && <p>Loading...</p>}
            {(!loading && !toDoList.length) && <p>Crea tu primera tarea</p>}

            {toDoList.length > 0 &&
              toDoList.filter((item: ITask) => filterTasks(item)).map((item: ITask) => {
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
