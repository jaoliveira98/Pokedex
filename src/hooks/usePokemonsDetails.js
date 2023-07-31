import { useEffect, useState } from "react";
import { getPokemonDetails } from "../api/getPokemonDetails";
import usePokemons from "./usePokemons";

const usePokemonsDetails = () => {
	const pokemonNames = usePokemons();
	const [pokemonDetails, setPokemonDetails] = useState();

	useEffect(() => {
		const fetchPokemonDetails = async () => {
			if (!pokemonNames) return;

			const details = await Promise.all(
				pokemonNames?.results.map((pokemon) =>
					getPokemonDetails({ name: pokemon.name })
				)
			);
			
			setPokemonDetails(details);
		};
		fetchPokemonDetails();
	}, [pokemonNames]);

	return pokemonDetails;
};

export default usePokemonsDetails;
