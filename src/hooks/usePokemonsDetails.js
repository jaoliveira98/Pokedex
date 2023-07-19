import { useEffect, useState } from "react";
import { getPokemonDetails } from "../api/getPokemonDetails";
import usePokemons from "./usePokemons";
import pokemons from "../assets/pokemons.json";

const usePokemonsDetails = () => {
	// const pokemonNames = usePokemons();
	const [pokemonDetails, setPokemonDetails] = useState(pokemons);

	// useEffect(() => {
	// 	const fetchPokemonDetails = async () => {
	// 		const details = await Promise.all(
	// 			pokemonNames?.results.map((pokemon) =>
	// 				getPokemonDetails({ name: pokemon.name })
	// 			)
	// 		);
	// 		setPokemonDetails(details);
	// 	};
	// 	fetchPokemonDetails();
	// }, [pokemonNames]);
	return pokemonDetails;
};

export default usePokemonsDetails;
