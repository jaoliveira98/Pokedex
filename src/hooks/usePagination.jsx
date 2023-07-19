import { useState } from "react";

const usePagination = (data, itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const numPages = Math.ceil(data.length / itemsPerPage);

	const previousPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	const nextPage = () => {
		if (currentPage !== numPages) setCurrentPage(currentPage + 1);
	};

	const currentPageData = data.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
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
