import React from "react";

const Hello = ({ title, lessons }) => {
  return (
    <div>
      <h1>Hello {title} </h1>
      <p>This containt {lessons} lessons</p>
    </div>
  );
};

export default Hello;
