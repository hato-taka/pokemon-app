// useEffect をインポート
import { useEffect, useState } from 'react';
import PokemonThumbnails from './PokemonThumbnails';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);

  // 仮でデータを作成する
  // 複数形pokemons に修正
  const pokemons = [
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
  // パラメータにlimitを設定し、20件取得する
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const getAllPokemons = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAllPokemons(data.results);

        createPokemonObject(data.results);
        // 次の20件をURLにセットする
        setUrl(data.next);
      })
  }

  const createPokemonObject = (results) => {

    results.forEach(pokemon => {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      fetch(pokemonUrl)
        .then(res => res.json())
        .then(data => {
          const image = data.sprites.other["official-artwork"].front_default;
          const type = data.types[0].type.name;
          console.log(data.name, image, type);
        })
    })
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

  return (
    <div className="app-container">
      <h1>ポケモン図鑑</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {pokemons.map((pokemon, index) => (
            <PokemonThumbnails
              id={pokemon.id}
              // 初回レンダリングの際にエラーになるので、オプショナルチェーン(?)をつける
              name={allPokemons[index]?.name}
              image={pokemon.image}
              type={pokemon.type}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
