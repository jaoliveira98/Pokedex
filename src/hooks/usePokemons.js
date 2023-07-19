import { useState, useEffect } from "react";
import { getPokemons } from "../api/getPokemons";

const usePokemons = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getPokemons();
			setData(response);
		};
		fetchData();
	}, []);

	return data;
};

export default usePokemons;
