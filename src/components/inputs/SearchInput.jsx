const SearchInput = ({ onChange, value }) => {
	return (
		<input
			onChange={onChange}
			value={value}
			className="w-full drop-shadow border rounded-md px-6 py-4 bg-white text-xs text-slate-400 my-5"
			placeholder="Search for a Pokemon!"
		/>
	);
};

export default SearchInput;
