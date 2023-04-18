import React from 'react';
import type { InputHTMLAttributes } from 'react';

import './ToDoInput.css'

function ToDoInput({ ...inputProps }: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <input type="text" {...inputProps} />
  )
}

export { ToDoInput };
