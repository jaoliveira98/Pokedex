import React from "react";
import { typeProperties } from "../utils/type";

const PokeTypeIcon = ({ type }) => {
	const getIcon = (type) => {
		const Icon = typeProperties[type].icon;
		return Icon ? <Icon /> : null;
	};

	return (
		<>
			<div
				className={`${typeProperties[type].color} p-2 rounded-full flex items-center justify-center shadow text-white text-xs`}
			>
				{getIcon(type)}
			</div>
		</>
	);
};

export default PokeTypeIcon;
