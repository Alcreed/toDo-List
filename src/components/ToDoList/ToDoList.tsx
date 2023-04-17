import React from 'react';

interface ListProps {
  children: React.ReactNode
}

function ToDoList({ children }: ListProps): JSX.Element {
  return (
    <section>
      {children}
    </section>
  )
}

export { ToDoList };
