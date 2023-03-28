import React from 'react';

interface ListProps {
  children: JSX.Element
}

function ToDoList({ children }: ListProps): JSX.Element {
  return (
    <section>
      {children}
    </section>
  )
}

export { ToDoList };
