const SearchInput = ({ onChange, value }) => {
	return (
		<input
			onChange={onChange}
			value={value}
			className="w-full shadow rounded-md px-6 py-4 bg-white text-xs text-slate-400 my-5 focus:border focus:border-red-700"
			placeholder="Search for a Pokemon!"
		/>
	);
};

export default SearchInput;
