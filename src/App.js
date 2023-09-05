// useEffect をインポート
import { useEffect, useState } from 'react';
import PokemonThumbnails from './PokemonThumbnails';

function App() {

  const [pokemonNames, setPokemonNames] = useState([]);

  // 仮でデータを作成する
  const pokemon = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "くさ"
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      type: "くさ"
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      type: "くさ"
    },
  ]

  // APIからデータを取得する
  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results[0].name);
        // 仮で３つのポケモンの名前をセットする
        const name = [
          data.results[0].name,
          data.results[1].name,
          data.results[2].name,
        ]
        setPokemonNames(name);
      })
  }, [])

  return (
    <div className="app-container">
      <h1>ポケモン図鑑</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          <PokemonThumbnails
            id={pokemon[0].id}
            name={pokemonNames[0]}
            image={pokemon[0].image}
            type={pokemon[0].type} />
          <PokemonThumbnails
            id={pokemon[1].id}
            name={pokemonNames[1]}
            image={pokemon[1].image}
            type={pokemon[1].type} />
          <PokemonThumbnails
            id={pokemon[2].id}
            name={pokemonNames[2]}
            image={pokemon[2].image}
            type={pokemon[2].type} />
        </div>
      </div>
    </div>
  );
}

export default App;
