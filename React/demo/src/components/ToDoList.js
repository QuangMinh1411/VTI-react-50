import React from "react";
import ToDo from "./ToDo";
const ToDoList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <ToDo key={task.title} title={task.title} content={task.content} />
      ))}
    </>
  );
};

export default ToDoList;
