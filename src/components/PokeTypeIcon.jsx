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
				className={`${typeProperties[type].color} h-[32px] w-[32px] rounded-full flex items-center justify-center drop-shadow-sm border text-white`}
			>
				{getIcon(type)}
			</div>
		</>
	);
};

export default PokeTypeIcon;
