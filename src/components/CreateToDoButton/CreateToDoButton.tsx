import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

import './CreateToDoButton.css';

function CreateToDoButton({ ...buttonProps }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      className='CreateToDo_button'
      {...buttonProps}
    >
      Create
    </button>
  )
}

export { CreateToDoButton };
