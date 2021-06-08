import Pokemon from './Pokemon';

function PokeList({pokemons}){
    return(
        <ul>
            {pokemons.map((element, id) => (<li key={id}><Pokemon id={element.id} name={element.name} types={element.types} evolution={element.evolution} url={element.url}/></li>))}
        </ul>
    );
}

export default PokeList;