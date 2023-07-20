import React, { useEffect } from "react";
import FilterFixed from "../components/FilterFixed";
import Pagination from "../components/Pagination";
import PokeCard from "../components/PokeCard";
import PokeTypeTag from "../components/PokeTypeTag";
import SearchInput from "../components/inputs/SearchInput";
import usePagination from "../hooks/usePagination";
import usePokemonsDetails from "../hooks/usePokemonsDetails";
import { useSearch } from "../hooks/useSearch";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import useScroll from "../hooks/useScroll";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Logo from "../assets/Logo.png";

const HomePage = () => {
	const pokemons = usePokemonsDetails();
	const { search, setSearch, filteredPokemons } = useSearch(pokemons);
	const {
		currentPage,
		numPages,
		previousPage,
		nextPage,
		currentPageData: currentPagePokemons,
		setCurrentPage,
	} = usePagination(filteredPokemons);

	useEffect(() => {
		setCurrentPage(1);
	}, [search]);

	const {
		scrollRef,
		showLeftButton,
		showRightButton,
		handleScrollLeft,
		handleScrollRight,
	} = useScroll();

	return (
		<>
			<div className="container mx-auto">
				<div className="px-3 sm:p-0">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-4">
						<div className="flex items-center gap-10">
							<img src={Logo} alt="Imagemzita" />
							<SearchInput onChange={(e) => setSearch(e.target.value)} />
						</div>
						<div className="flex items-center gap-4">
							{showLeftButton && (
								<PrimaryBtn onClick={handleScrollLeft}>
									<HiChevronLeft />
								</PrimaryBtn>
							)}
							<div ref={scrollRef} className="flex gap-4 overflow-hidden p-5">
								<PokeTypeTag />
							</div>
							{showRightButton && (
								<PrimaryBtn onClick={handleScrollRight}>
									<HiChevronRight />
								</PrimaryBtn>
							)}
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
						changeCurrentPage={setCurrentPage}
					/>
				</div>
			</div>
			<FilterFixed filterOne="1" filterTwo="2" />
		</>
	);
};

export default HomePage;
