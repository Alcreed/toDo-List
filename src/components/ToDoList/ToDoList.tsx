import React from 'react';

import './ToDoList.css';

interface ListProps {
  children: React.ReactNode
}

function ToDoList({ children }: ListProps): JSX.Element {
  return (
    <div className='ToDoList_container'>
      {children}
    </div>
  )
}

export { ToDoList };
