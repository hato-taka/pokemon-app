import React from "react";

const PokemonThumbnails = ({ id, name, image, type }) => {
  // 仮で草タイプのクラス(grass)を入れておく
  const style = "thumb-container grass";

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
