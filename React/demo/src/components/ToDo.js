import React from "react";

const ToDo = ({ title, content }) => {
  return (
    <>
      <li>
        <h1>{title}</h1>
        <p>{content}</p>
      </li>
    </>
  );
};

export default ToDo;
