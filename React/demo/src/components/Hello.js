import React from "react";

const Hello = ({ title, lessons, children }) => {
  return (
    <div>
      <h1>Hello {title} </h1>
      <p>This containt {lessons} lessons</p>
      <p>{children}</p>
    </div>
  );
};

export default Hello;
