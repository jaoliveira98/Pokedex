import { Link } from "react-router-dom";

const navLinks = [
	{ id: 1, name: "1", link: "./1" },
	{ id: 2, name: "2", link: "./2" },
	{ id: 3, name: "3", link: "./3" },
	{ id: 4, name: "4", link: "./4" },
	{ id: 5, name: "5", link: "./5" },
];

const VerticalNavbar = () => {
	return (
		<nav className="fixed left-0 top-0 bottom-0 m-4 bg-red-500 flex items-center flex-col border drop-shadow-md rounded-md px-6 py-8 gap-10 z-10">
			{navLinks.map((item) => (
				<Link
					key={item.id}
					to={item.link}
					className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"
				>
					{item.name}
				</Link>
			))}
		</nav>
	);
};

export default VerticalNavbar;
