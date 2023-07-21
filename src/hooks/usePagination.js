import { useState } from "react";

const POKEMONS_PER_PAGE = 16;

const usePagination = (data) => {
	const [currentPage, setCurrentPage] = useState(1);

	// Pages = items per page
	const numPages = Math.ceil(data.length / POKEMONS_PER_PAGE);

	// Previous page
	const previousPage = () => {
		// Go back if not on first page
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	// Next page
	const nextPage = () => {
		// Go forward if not on last page
		if (currentPage !== numPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	// Calculate the data to display on the current page
	const currentPageData = data.slice(
		(currentPage - 1) * POKEMONS_PER_PAGE,
		currentPage * POKEMONS_PER_PAGE
	);

	return {
		currentPage,
		numPages,
		previousPage,
		nextPage,
		currentPageData,
		setCurrentPage,
	};
};

export default usePagination;
