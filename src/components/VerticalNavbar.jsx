import React from "react";

const navLinks = [
	{ id: 1, name: "Link 1", link: "./1" },
	{ id: 2, name: "Link 2", link: "./2" },
	{ id: 3, name: "Link 3", link: "./3" },
	{ id: 4, name: "Link 4", link: "./4" },
	{ id: 5, name: "Link 5", link: "./5" },
];

const VerticalNavbar = () => {
	return (
		<nav className="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block">
			{navLinks.map((item) => (
				<a key={item.id} href={item.link}>
					{item.name}
				</a>
			))}
		</nav>
	);
};

export default VerticalNavbar;
