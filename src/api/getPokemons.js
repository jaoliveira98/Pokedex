export const getPokemons = async () => {
	const response = await fetch(
		"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"
	);
	const pokemons = await response.json();
	return pokemons;
};
