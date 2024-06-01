// src/TodoList.jsx
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Todo } from "./types";
import TodoItem from "./TodoItem";



const TodoList = ({ todos, deleteTodo }) => {
  const todoList = useSelector((state) => state.todos.todos);
  
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;