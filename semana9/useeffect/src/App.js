import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  const [pokeList, setPokelist] = useState([])
  // lista de pokemons que está sendo guardada no estado
  const [pokeName, setPokeName] = useState("")
  // nome do pokemon guardado no estado

  useEffect(() => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        // função que está setando no estado os 151 pokemons
        setPokelist(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };
  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
