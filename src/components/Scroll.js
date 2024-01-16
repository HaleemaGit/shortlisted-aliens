import React from "react";

const Scroll = (props) => {
  return (
    <div>
      <div className="title">I am interested in this!</div>
    <div
      style={{
        overflow: "scroll",
        border: "3px solid white",
        height: "500px",
        marginTop: "3rem",
      }}
    >
      {props.children}
    </div>
    </div>
  );
};

export default Scroll;
