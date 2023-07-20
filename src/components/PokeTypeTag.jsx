import useTypes from "../hooks/useTypes";
import { typeProperties } from "../utils/type";

const PokeTypeTag = () => {
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
					className="shadow rounded-full px-6 w-auto py-2 bg-white text-sm text-slate-800 flex items-center gap-2"
				>
					{getIcon(entry.name)}
					<p className="capitalize">{entry.name}</p>
				</div>
			))}
		</>
	);
};

export default PokeTypeTag;
