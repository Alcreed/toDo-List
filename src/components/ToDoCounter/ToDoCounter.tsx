import React from 'react';

import './ToDoCounter.css';

interface IToDoCounterProps {
  completedToDo: number,
  total: number
}

function ToDoCounter({ completedToDo, total }: IToDoCounterProps): JSX.Element {
  return (
    <h2 className='ToDoCounter'>{`Has completado ${completedToDo} de ${total} ToDo's`}</h2>
  );
}

export { ToDoCounter };
