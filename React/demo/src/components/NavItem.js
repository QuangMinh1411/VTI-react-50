import React from "react";
import AnimatedLink from "./AnimatedLink";
function NavItem(props) {
  return (
    <div>
      <AnimatedLink target={props.target} click={props.clickMe} />
    </div>
  );
}

export default NavItem;
