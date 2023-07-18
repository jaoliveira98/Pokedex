const FilterFixed = ({ filterOne, filterTwo }) => {
	return (
		<div className="fixed bottom-10 right-5 flex items-center flex-col px-1 drop-shadow-md border rounded-md bg-white">
			<p className="m-2 text-sm text-slate-800">{filterOne}</p>
			<div className="h-[1px] w-full bg-gray-200" />
			<p className="m-2 text-sm text-slate-800">{filterTwo}</p>
		</div>
	);
};

export default FilterFixed;
