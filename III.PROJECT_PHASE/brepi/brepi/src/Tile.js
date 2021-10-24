import React from "react";

const Tile = (props) => {
  return (
    <div className="tile" className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="image"
            src={props.data.image_url}
            alt={`${props.data.name} img`}
          />
          <div className="name">{props.data.name}</div>
        </div>
        <div className="flip-card-back">
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Tile;
