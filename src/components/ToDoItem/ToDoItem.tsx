import React from 'react';

import Completed from '../../assets/icons8-checkmark.svg';
import Check from '../../assets/icons8-circle-48.png';
import Delete from '../../assets/icons8-delete.svg';

import '../ToDoList/ToDoList.css';

interface ItemProps {
  item: { text: string, completed: boolean }
}

function ToDoItem({ item }: ItemProps): JSX.Element {

  const onComplete = () => {
    alert('complete')
  };

  const onDelete = () => {
    alert('delete')
  };

  return (
    <div className='ToDoItem_container'>
      <img
        className='ToDoItem_check'
        src={item.completed ? Completed : Check}
        alt="Estado tarea"
        onClick={() => onComplete()}
      />

      <p className={`ToDoItem_task ${item.completed ? 'completed' : ''}`}>{item.text}</p>

      <img
        className='ToDoItem_delete'
        src={Delete}
        alt="Borrar tarea"
        onClick={() => onDelete()}
      />
    </div>
  )
}

export { ToDoItem };
