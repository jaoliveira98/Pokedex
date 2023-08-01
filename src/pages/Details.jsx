import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonList } from "../App";
import { useEvolution } from "../hooks/useEvolution";

const Details = () => {
	const { pokemonName } = useParams();
	const pokemons = useContext(PokemonList);
	const pokemon = pokemons?.find((pokemon) => pokemon?.name == pokemonName);
	const evolutionChain = useEvolution(pokemon?.id);

	if (!pokemon) {
		return <>Loading</>;
	}

	const getStatName = (name) => {
		return name.replace("-", " ");
	};

	const formatNumber = (number) => {
		return Number.parseFloat(number * 0.1).toFixed(2);
	};

	return (
		<div className="container mx-auto">
			<h1 className="capitalize text-2xl font-semibold text-slate-800">
				{pokemon?.name}
			</h1>

			<h1 className="capitalize text-xl font-semibold text-slate-800 mt-5">
				Types:
			</h1>
			{pokemon?.types.map((type) => (
				<p key={type.type.name} className="capitalize">
					{type.type.name}
				</p>
			))}

			<h1 className="capitalize text-xl font-semibold text-slate-800 mt-5">
				Evolutions:
			</h1>

			{evolutionChain?.chain.evolves_to[0].species.name ?? <>Not found</>}

			<h1 className="capitalize text-xl font-semibold text-slate-800 mt-5">
				Abilities:
			</h1>
			{pokemon?.abilities.map((ability) => (
				<p key={ability.ability.name} className="capitalize">
					{ability.ability.name}
				</p>
			))}

			<h1 className="capitalize text-xl font-semibold text-slate-800 mt-5">
				Stats:
			</h1>
			{pokemon?.stats.map((stat) => (
				<p key={stat.stat.name} className="capitalize">
					{stat.base_stat} {getStatName(stat.stat.name)}
				</p>
			))}

			<h1 className="capitalize text-xl font-semibold text-slate-800 mt-5">
				About:
			</h1>
			<p>Height:{formatNumber(pokemon?.height)}m</p>
			<p>Weight:{formatNumber(pokemon?.weight)}kg</p>

			<h1 className="capitalize text-xl font-semibold text-slate-800 mt-5">
				Moves:
			</h1>
			{pokemon?.moves.map((move) => (
				<p key={move.move.name} className="capitalize">
					{getStatName(move.move.name)}
				</p>
			))}
		</div>
	);
};

export default Details;
