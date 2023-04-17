import React from 'react';

interface ItemProps {
  item: { text: string, completed: boolean }
}

function ToDoItem({ item }: ItemProps): JSX.Element {
  return (
    <li>{item.text}</li>
  )
}

export { ToDoItem };
