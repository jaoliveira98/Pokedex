import { useState, useMemo } from "react";

export const useSearch = (pokemons) => {
	const [search, setSearch] = useState("");

	const filteredPokemons = useMemo(
		() =>
			pokemons?.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(search.toLowerCase())
			),
		[pokemons, search]
	);

	return { search, setSearch, filteredPokemons };
};
