import React from "react";

function AnimatedLink(props) {
  return (
    <a href={props.target} onClick={props.click} target="_blank">
      AnimatedLink
    </a>
  );
}

export default AnimatedLink;
