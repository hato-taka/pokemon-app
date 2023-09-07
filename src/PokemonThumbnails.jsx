import React, { useState, useEffect } from "react";
import pokemonJson from "./pokemon.json";
import pokemonTypeJson from "./pokemonType.json";

const PokemonThumbnails = ({ id, name, image, iconImage, type }) => {
  const style = `thumb-container ${type}`;

  const [jpName, setJpName] = useState("");
  const [jpType, setJpType] = useState("");

  const setJapaneseName = async () => {
    const target = await pokemonJson.find(
      (pokemon) => pokemon.en.toLowerCase() === name
    );
    target ? setJpName(target.ja) : setJpName("???");
  };

  const setJapaneseType = async () => {
    const target = await pokemonTypeJson[type];
    target ? setJpType(target) : setJpType(type);
  };

  useEffect(() => {
    setJapaneseName();
    setJapaneseType();
  }, []);

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <img src={iconImage} alt={name} className="icon-image" />
      <div className="detail-wrapper">
        <h4>{jpName}</h4>
        <h3>{jpType}</h3>
      </div>
    </div>
  );
};

export default PokemonThumbnails;
