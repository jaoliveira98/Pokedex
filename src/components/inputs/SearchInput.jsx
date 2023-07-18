const SearchInput = ({ onChange, value }) => {
	return (
		<input
			onChange={onChange}
			value={value}
			className="w-full drop-shadow-md border rounded-md px-6 py-4 bg-white text-xs text-slate-400 my-5"
			placeholder="Search to explore Pokémon by type, weakness, ability, and more!"
		/>
	);
};

export default SearchInput;
