import React from 'react';

import './CreateToDoButton.css';

function CreateToDoButton(): JSX.Element {

  const createTask = (message: string) => {
    alert(message);
  };

  return (
    <button
      className='CreateToDo_button'
      onClick={() => createTask('Creaste una tarea')}
    >
      Create
    </button>
  )
}

export { CreateToDoButton };
