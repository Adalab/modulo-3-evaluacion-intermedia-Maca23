import "../stylesheets/App.css";
import data from '../data/pokemons.json';
import PokeList from "./PokeList";

function App() {
  return (
  <div>
    <h2>Mi lista de Pokémon</h2>
    <PokeList pokemons={data} />
  </div>
  );
}

export default App;