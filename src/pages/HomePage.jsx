// HomePage.js
import React, { useEffect, useState } from "react";
import FilterFixed from "../components/FilterFixed";
import PokeCard from "../components/PokeCard";
import PokeTypeTag from "../components/PokeTypeTag";
import SearchInput from "../components/inputs/SearchInput";
import usePokemonsDetails from "../hooks/usePokemonsDetails";
import { useSearch } from "../hooks/useSearch";
import Pagination from "../components/Pagination";

const POKEMONS_PER_PAGE = 24;

const HomePage = () => {
	// Data
	const pokemons = usePokemonsDetails();

	// Search
	const { search, setSearch, filteredPokemons } = useSearch(pokemons);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);

	const lastIndex = currentPage * POKEMONS_PER_PAGE;
	const firstIndex = lastIndex - POKEMONS_PER_PAGE;
	const currentPagePokemons = filteredPokemons.slice(firstIndex, lastIndex);

	// It's the number of pages that will be needed to show all Pokemons
	const numPages = Math.ceil(filteredPokemons.length / POKEMONS_PER_PAGE);

	const previousPage = () => {
		if (currentPage !== 1) return setCurrentPage(currentPage - 1);
	};
	const nextPage = () => {
		if (currentPage !== numPages) return setCurrentPage(currentPage + 1);
	};

	const changeCurrentPage = (id) => {
		return setCurrentPage(id);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [search]);

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
						{currentPagePokemons.map((pokemon) => (
							<PokeCard key={pokemon.name} pokemon={pokemon} />
						))}
					</div>

					<Pagination
						currentPage={currentPage}
						numPages={numPages}
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
