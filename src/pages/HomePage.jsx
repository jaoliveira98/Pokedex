import FilterFixed from "../components/FilterFixed";
import PokeCard from "../components/PokeCard";
import PokeTypeTags from "../components/PokeTypeTags";
import SearchInput from "../components/inputs/SearchInput";
import usePokemonsDetails from "../hooks/usePokemonsDetails";
import { useState } from "react";

const HomePage = () => {
	const pokemons = usePokemonsDetails();

	const [query, setQuery] = useState("");
	// console.log(pokemons.filter((user) => user.name.includes("bu")));
	return (
		<>
			<div className="container mx-auto">
				<div>
					<div className="grid grid-cols-2 items-center gap-4">
						<div className="flex items-center gap-10">
							<h1 className="text-2xl text-slate-800">Pokedex</h1>
							<SearchInput onChange={(e) => setQuery(e.target.value)} />
						</div>
						<div className="flex gap-4 overflow-x-scroll">
							<PokeTypeTags />
						</div>
					</div>

					<div className="grid grid-cols-1 my-5 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
						{pokemons?.map((pokemon) => (
							<PokeCard key={pokemon.name} pokemon={pokemon} />
						))}
					</div>
				</div>
			</div>

			<FilterFixed filterOne="1" filterTwo="2" />
		</>
	);
};

export default HomePage;
