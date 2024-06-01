// src/TodoItem.jsx
import React, { FC } from "react";




const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;