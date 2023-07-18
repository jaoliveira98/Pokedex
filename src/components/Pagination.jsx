// Pagination.js
import React from "react";

const Pagination = ({
	currentPage,
	numPage,
	previousPage,
	nextPage,
	changeCurrentPage,
}) => {
	const numbers = [...Array(numPage + 1).keys()].slice(1);

	return (
		<nav>
			<ul className="flex items-center justify-between">
				<li>
					<a href="#" onClick={previousPage}>
						Prev
					</a>
				</li>
				<ul className="flex items-center justify-center gap-4 ">
					{numbers.map((n, i) => (
						<a
							href="#"
							onClick={() => changeCurrentPage(n)}
							className="active:scale-75 transition duration-75 ease-in-out"
						>
							<li
								key={i}
								className={`flex items-center justify-center rounded-md border h-[32px] w-[32px] drop-shadow-md ${
									currentPage === n
										? "bg-red-700 text-white scale-125 "
										: "bg-white"
								}`}
							>
								{n}
							</li>
						</a>
					))}
				</ul>
				<li>
					<a href="#" onClick={nextPage}>
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
