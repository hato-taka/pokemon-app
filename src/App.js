import { useEffect, useState } from 'react';
import PokemonThumbnails from './PokemonThumbnails';
import pokemonJson from "./pokemon.json";
import pokemonTypeJson from "./pokemonType.json";


function App() {

  const [allPokemons, setAllPokemons] = useState([]);

  // APIからデータを取得する
  // パラメータにlimitを設定し、20件取得する
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [isLoading, setIsLoading] = useState(false);

  const getAllPokemons = () => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // 次の20件をURLにセットする
        setUrl(data.next);
        createPokemonObject(data.results);
      })
      .finally(() => {
        // allPokemons.sort((a, b) => a.id - b.id)
        setIsLoading(false);
      })
  }

  const createPokemonObject = (results) => {
    results.forEach(pokemon => {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      fetch(pokemonUrl)
        .then(res => res.json())
        .then(async (data) => {
          const _image = data.sprites.other["official-artwork"].front_default;
          const _iconImage = data.sprites.other.dream_world.front_default;
          const _type = data.types[0].type.name;
          const japanese = await translateToJapanese(data.name, _type);
          const newList = {
            id: data.id,
            name: data.name,
            iconImage: _iconImage,
            image: _image,
            type: _type,
            jpName: japanese.name,
            jpType: japanese.type
          }
          // 既存のデータを展開し、新しいデータを追加する
          setAllPokemons(currentList => [...currentList, newList].sort((a, b) => a.id - b.id));
        })
    })
  }

  const translateToJapanese = async (name, type) => {
    const jpName = await pokemonJson.find(
      (pokemon) => pokemon.en.toLowerCase() === name
    ).ja;
    const jpType = await pokemonTypeJson[type];
    return { name: jpName, type: jpType };
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

  return (
    <div className="app-container">
      <h1>ポケモン図鑑</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnails
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              iconImage={pokemon.iconImage}
              type={pokemon.type}
              key={index}
              jpName={pokemon.jpName}
              jpType={pokemon.jpType}
            />
          ))}
        </div>
        {isLoading ? (
          <div className='load-more'>now loading...</div>
        ) : (
          <button className='load-more' onClick={getAllPokemons}>
            もっとみる！
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
