import React from "react";
import monsterBall from "./monsterBall.jpg";

const PokemonThumbnails = ({
  id,
  name,
  image,
  iconImage,
  type,
  jpName,
  jpType,
}) => {
  const style = `thumb-container ${type}`;

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src="" alt={name} />
      <img src={monsterBall} alt={name} className="icon-image" />
      <div className="detail-wrapper">
        <h4>{jpName ?? "???"}</h4>
        <h3>{jpType ?? type}</h3>
      </div>
    </div>
  );
};

export default PokemonThumbnails;
