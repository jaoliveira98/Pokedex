import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonList } from '../App';

const Details = () => {
    const { pokemonName } = useParams();
    const pokemons = useContext(PokemonList);
    const pokemon = pokemons?.find(pokemon => pokemon?.name == pokemonName);

    return (
        <div>
            <h1>{pokemon?.name}</h1>
        </div>
    )
}

export default Details