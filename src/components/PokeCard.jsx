import { Link } from "react-router-dom";
import PokeTypeIcon from "./PokeTypeIcon";

const PokeCard = ({ pokemon }) => {
	const AddZero = () => {
		if (pokemon.id.toString().length === 1) {
			return "#000" + pokemon.id;
		} else if (pokemon.id.toString().length === 2) {
			return "#00" + pokemon.id;
		} else if (pokemon.id.toString().length === 3) {
			return "#0" + pokemon.id;
		} else if (pokemon.id.toString().length === 4) {
			return "#" + pokemon.id;
		}
		return pokemon.id;
	};

	return (
		<a>
			<div className="drop-shadow border rounded-md px-6 py-8 bg-white flex items-center justify-between">
				<div>
					<h1 className="capitalize text-lg font-semibold text-slate-800">
						{pokemon.name}
					</h1>
					<span className="text-xs font-light text-slate-400">{AddZero()}</span>
				</div>
				<div className="flex items-center justify-center gap-2">
					{/* Display the types for each Pokemon */}
					{pokemon.types?.map((entry) => (
						<PokeTypeIcon key={entry.type.name} type={entry.type.name} />
					))}
				</div>
			</div>
		</a>
	);
};
export default PokeCard;
