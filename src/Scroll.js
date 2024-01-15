import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "3px solid yellow",
        height: "500px",
        marginTop: "3rem",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
