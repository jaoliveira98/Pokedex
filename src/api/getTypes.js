export const getTypes = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/type/");
	const types = await response.json();
	return types;
};
