import React from "react";

const PrimaryBtn = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center gap-2 shadow rounded-full bg-white p-3 text-sm hover:bg-gray-50 active:bg-white"
		>
			{children}
		</button>
	);
};

export default PrimaryBtn;
