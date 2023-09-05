import React from "react";

const PokemonThumbnails = ({ id, name, image, type }) => {
  const style = `thumb-container ${type}`;

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h4>{name}</h4>
        <h3>{type}</h3>
      </div>
    </div>
  );
};

export default PokemonThumbnails;
