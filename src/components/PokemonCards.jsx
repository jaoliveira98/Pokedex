import React from "react";
const data = [
	{ id: 1, name: "Bulbasaur", type: ["Grass", "Poisen"] },
	{ id: 2, name: "Ivysaur", type: ["Grass", "Poisen"] },
	{ id: 3, name: "Venusaur", type: ["Grass", "Poisen"] },
	{ id: 4, name: "Charmander", type: ["Fire"] },
];
const PokemonCards = () => {
	return (
		<>
			{data.map((item) => (
				<div key={item.id}>
					<div>
						<h1>{item.name}</h1>
						<span>{item.id}</span>
					</div>
				</div>
			))}
		</>
	);
};
export default PokemonCards;
