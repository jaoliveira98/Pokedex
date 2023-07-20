import { Link } from "react-router-dom";
import { BiHomeAlt2, BiHeart, BiNotification, BiLogOut } from "react-icons/bi";

const navLinks = [
	{ id: 1, name: "Homepage", icon: <BiHomeAlt2 />, link: "./1" },
	{ id: 2, name: "Favorites", icon: <BiHeart />, link: "./2" },
	{ id: 3, name: "Notifications", icon: <BiNotification />, link: "./3" },
];

const getIcon = () => {
	const Icon = navLinks.name;
	return Icon ? <Icon /> : null;
};

const VerticalNavbar = () => {
	return (
		<nav className="fixed left-0 top-0 bottom-0 bg-red-700 flex items-center flex-col justify-between shadow px-4 border-l-4 border-yellow-500 py-8 z-10">
			<div className="flex flex-col gap-10 ">
				{navLinks.map((item) => (
					<Link key={item.id} to={item.link} className="text-white text-2xl">
						{item.icon}
					</Link>
				))}
			</div>
			<Link to="./" className="text-white text-2xl">
				<BiLogOut />
			</Link>
		</nav>
	);
};

export default VerticalNavbar;
