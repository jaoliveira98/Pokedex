export const getPokemonDetails = async ({ name }) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const pokemonDetails = await response.json();

	return pokemonDetails;
};
