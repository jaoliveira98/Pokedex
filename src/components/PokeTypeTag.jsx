import React from "react";
import useTypes from "../hooks/useTypes";
import { typeProperties } from "../utils/type";

const PokeTypeTag = ({ selectedType, setSelectedType }) => {
	const data = useTypes();

	const handleTypeClick = (type) => {
		if (selectedType === type) {
			setSelectedType(null);
		} else {
			setSelectedType(type);
		}
	};

	const getIcon = (type) => {
		const Icon = typeProperties[type].icon;
		return Icon ? <Icon /> : null;
	};

	return (
		<>
			{data?.results.map((entry) => (
				<button
					key={entry.name}
					className={`shadow rounded-full px-6 w-auto py-2 text-sm text-slate-800 flex items-center gap-2 ${
						selectedType === entry.name ? "bg-red-700 text-white" : "bg-white"
					}`}
					onClick={() => handleTypeClick(entry.name)}
				>
					{getIcon(entry.name)}
					<p className="capitalize">{entry.name}</p>
					{selectedType === entry.name ? (
						<p className="no-underline">x</p>
					) : (
						<p></p>
					)}
				</button>
			))}
		</>
	);
};

export default PokeTypeTag;
