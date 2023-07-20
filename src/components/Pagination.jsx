import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import PrimaryBtn from "./buttons/PrimaryBtn";

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
					<PrimaryBtn onClick={previousPage}>
						<HiChevronLeft /> Prev
					</PrimaryBtn>
				</li>
				<ul className="flex items-center justify-center gap-4 ">
					{numbers.map((n, i) => (
						<a key={i} href="#" onClick={() => changeCurrentPage(n)}>
							<li
								className={`flex items-center justify-center ${
									currentPage === n
										? "underline underline-offset-8 font-bold"
										: ""
								}`}
							>
								{n}
							</li>
						</a>
					))}
				</ul>
				<li>
					<PrimaryBtn onClick={nextPage}>
						Next <HiChevronRight />
					</PrimaryBtn>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
