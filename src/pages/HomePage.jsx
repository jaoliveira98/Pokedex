// HomePage.js
import React, { useState } from "react";
import FilterFixed from "../components/FilterFixed";
import PokeCard from "../components/PokeCard";
import PokeTypeTag from "../components/PokeTypeTag";
import SearchInput from "../components/inputs/SearchInput";
import usePokemonsDetails from "../hooks/usePokemonsDetails";
import { useSearch } from "../hooks/useSearch";
import Pagination from "../components/Pagination";

const HomePage = () => {
	// Data
	const pokemons = usePokemonsDetails();

	// Search
	const { setSearch, filteredPokemons } = useSearch(pokemons);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const pokemonsPerPage = 12;
	const lastIndex = currentPage * pokemonsPerPage;
	const firstIndex = lastIndex - pokemonsPerPage;
	const records = filteredPokemons.slice(firstIndex, lastIndex);
	const numPage = Math.ceil(filteredPokemons.length / pokemonsPerPage);

	const previousPage = () => {
		if (currentPage !== 1) return setCurrentPage(currentPage - 1);
	};
	const nextPage = () => {
		if (currentPage !== numPage) return setCurrentPage(currentPage + 1);
	};

	const changeCurrentPage = (id) => {
		return setCurrentPage(id);
	};

	return (
		<>
			<div className="container mx-auto">
				<div>
					<div className="grid grid-cols-2 items-center gap-4">
						<div className="flex items-center gap-10">
							<h1 className="text-2xl text-slate-800">Pokedex</h1>
							<SearchInput onChange={(e) => setSearch(e.target.value)} />
						</div>
						<div className="flex gap-4 overflow-x-scroll my-5">
							<PokeTypeTag />
						</div>
					</div>
					<div className="grid grid-cols-1 my-5 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
						{records.map((pokemon) => (
							<PokeCard key={pokemon.name} pokemon={pokemon} />
						))}
					</div>

					<Pagination
						currentPage={currentPage}
						numPage={numPage}
						previousPage={previousPage}
						nextPage={nextPage}
						changeCurrentPage={changeCurrentPage}
					/>
				</div>
			</div>

			<FilterFixed filterOne="1" filterTwo="2" />
		</>
	);
};

export default HomePage;
