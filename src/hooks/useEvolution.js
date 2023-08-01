import { useEffect, useState } from "react";

export const useEvolution = (id) => {
  const [evolutionChain, setEvolutionChain] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
      const data = await response.json();
      setEvolutionChain(data);
    };

    fetchData();
  }, [id]);

  return evolutionChain;
};