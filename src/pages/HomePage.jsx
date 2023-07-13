import React, { useEffect } from "react";
import VerticalNavbar from "../components/VerticalNavbar";
import SearchInput from "../components/SearchInput";
import PokemonCards from "../components/PokemonCards";

const HomePage = () => {
	return (
		<div className="overflow-hidden">
			<div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
				<VerticalNavbar />
			</div>
			<div className="lg:pl-[19.5rem]">
				<SearchInput />
				<PokemonCards />
			</div>
		</div>
	);
};

export default HomePage;
