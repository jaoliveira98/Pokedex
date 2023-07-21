import { useState, useMemo } from "react";

export const useSearch = (pokemons) => {
	const [search, setSearch] = useState("");
	const [selectedType, setSelectedType] = useState(null);

	const filteredPokemons = useMemo(() => {
		let filteredData = pokemons;

		// Filter by name
		if (search) {
			filteredData = filteredData.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(search.toLowerCase())
			);
		}

		// Filter by type
		if (selectedType) {
			filteredData = filteredData.filter((pokemon) =>
				pokemon.types.some((type) => type.type.name === selectedType)
			);
		}

		return filteredData;
	}, [pokemons, search, selectedType]);

	return { search, setSearch, selectedType, setSelectedType, filteredPokemons };
};
