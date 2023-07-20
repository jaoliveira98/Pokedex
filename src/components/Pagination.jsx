// Pagination.js
import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const Pagination = ({
	currentPage,
	numPages,
	previousPage,
	nextPage,
	changeCurrentPage,
}) => {
	const numbers = [...Array(numPages + 1).keys()].slice(1);

	return (
		<nav>
			<ul className="flex items-center justify-between">
				<li>
					<a
						href="#"
						onClick={previousPage}
						className="flex items-center gap-2 drop-shadow border rounded-full bg-white py-2 px-5 hover:bg-gray-100 active:bg-white text-sm"
					>
						<HiChevronLeft /> Prev
					</a>
				</li>
				<ul className="flex items-center justify-center gap-4 ">
					{numbers.map((n, i) => (
						<a key={i} href="#" onClick={() => changeCurrentPage(n)}>
							<li
								className={`flex items-center justify-center${
									currentPage === n ? "bg-red-700" : "bg-white"
								}`}
							>
								{n}
							</li>
						</a>
					))}
				</ul>
				<li>
					<a
						href="#"
						onClick={nextPage}
						className="flex items-center gap-2 drop-shadow border rounded-full bg-white py-2 px-5 hover:bg-gray-100 active:bg-white text-sm"
					>
						Next <HiChevronRight />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
