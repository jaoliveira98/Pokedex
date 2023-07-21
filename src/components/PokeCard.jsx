import PokeTypeIcon from "./PokeTypeIcon";
import { GrRotateRight } from "react-icons/gr";
import { useState } from "react";

const PokeCard = ({ pokemon, selectedType }) => {
	const [isRotated, setIsRotated] = useState(false);

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

	const handleRotate = () => {
		setIsRotated(!isRotated);
	};

	return (
		<a>
			<div className="shadow rounded-md px-6 py-8 bg-white flex items-center justify-between">
				<div className="flex items-center gap-4">
					<div className="flex items-center flex-col">
						<img
							src={
								isRotated
									? pokemon.sprites.back_default
									: pokemon.sprites.front_default
							}
							alt={pokemon.name}
							className="bg-gray-50 rounded-md border border-gray-100"
						/>
						<button
							onClick={handleRotate}
							className="flex items-center gap-2 justify-center text-sm"
						>
							<GrRotateRight /> Rotate
						</button>
					</div>
					<div>
						<h1 className="capitalize text-2xl font-semibold text-slate-800">
							{pokemon.name}
						</h1>

						<span className="text-sm font-light text-gray-400">
							{AddZero()}
						</span>
					</div>
				</div>

				<div className="flex items-center flex-col gap-2">
					{/* Display the types for each Pokemon */}
					{pokemon.types?.map((entry) => (
						<PokeTypeIcon
							key={entry.type.name}
							type={entry.type.name}
							selectedType={selectedType}
						/>
					))}
				</div>
			</div>
		</a>
	);
};

export default PokeCard;
