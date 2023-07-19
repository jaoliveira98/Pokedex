import { useEffect, useState } from "react";
import { getTypes } from "../api/getTypes";

const useTypes = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fecthData = async () => {
			const response = await getTypes();
			setData(response);
		};
		fecthData();
	}, []);

	return data;
};

export default useTypes;
