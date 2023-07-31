import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ErrorPage, Details } from "./pages";
import usePokemonsDetails from './hooks/usePokemonsDetails';

export const PokemonList = createContext();

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
    {
		path: "/details/:pokemonName",
		element: <Details />,
		errorElement: <ErrorPage />,
	},
]);

const App = () => {
    const pokemons = usePokemonsDetails();
    
    return (
        <PokemonList.Provider value={pokemons}>
            <RouterProvider router={router} />
        </PokemonList.Provider>
    )
}

export default App