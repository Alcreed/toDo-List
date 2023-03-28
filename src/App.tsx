import React from 'react';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        <ToDoItem />
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
