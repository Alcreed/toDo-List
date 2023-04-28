import React, { useContext } from 'react';
import { ToDoContext } from '../../ToDoContext';

import './ToDoCounter.css';

// Actualizar tipado desde el context, acá no funciona
interface IToDoCounterProps {
  completedToDoList: number,
  totalToDoList: number
}

function ToDoCounter(): JSX.Element {
  const { completedToDoList, totalToDoList }: IToDoCounterProps = useContext(ToDoContext);

  return (
    <h2 className='ToDoCounter'>{`Has completado ${completedToDoList} de ${totalToDoList} ToDo's`}</h2>
  );
}

export { ToDoCounter };
