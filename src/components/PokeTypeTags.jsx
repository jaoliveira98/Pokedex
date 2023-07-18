import useTypes from "../hooks/useTypes";
import { typeProperties } from "../utils/type";

const PokeTypeTags = () => {
	const data = useTypes();

	const getIcon = (type) => {
		const Icon = typeProperties[type].icon;
		return Icon ? <Icon /> : null;
	};

	return (
		<>
			{data?.results.map((entry) => (
				<div
					key={entry.name}
					className="drop-shadow-md border rounded-full px-6 w-auto py-2 bg-white text-sm text-slate-800 my-5 flex items-center gap-1.5"
				>
					{getIcon(entry.name)}
					<p className="capitalize">{entry.name}</p>
				</div>
			))}
		</>
	);
};

export default PokeTypeTags;
