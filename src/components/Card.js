import React from "react";
import "tachyons";

const Card = (props) => {
  const { id, name, username, email } = props;
  return (
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
        <div className="item">
          <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
          <h2>{name}</h2>
          <p className="little-items">{username}</p>
          <p className="little-items">{email}</p>
        </div>
      
    </div>
  );
};
export default Card;
