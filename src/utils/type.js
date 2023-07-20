import { FaFire, FaWater } from "react-icons/fa";
import { BiSolidLeaf, BiSolidSkull } from "react-icons/bi";
import {
	GiLibertyWing,
	GiPsychicWaves,
	GiStoneSphere,
	GiMetalBar,
	GiBoxingGlove,
} from "react-icons/gi";
import { AiFillBug, AiFillThunderbolt } from "react-icons/ai";
import { FaMountain } from "react-icons/fa";
import { BsRecordCircleFill } from "react-icons/bs";
import { RiGhost2Fill } from "react-icons/ri";

export const typeProperties = {
	normal: { color: "bg-red-400", icon: BsRecordCircleFill },
	fighting: { color: "bg-green-500", icon: GiBoxingGlove },
	flying: { color: "bg-blue-300", icon: GiLibertyWing },
	poison: { color: "bg-purple-500", icon: BiSolidSkull },
	ground: { color: "bg-yellow-700", icon: FaMountain },
	rock: { color: "bg-gray-500", icon: GiStoneSphere },
	bug: { color: "bg-green-700", icon: AiFillBug },
	ghost: { color: "bg-gray-500", icon: RiGhost2Fill },
	steel: { color: "bg-gray-500", icon: GiMetalBar },
	fire: { color: "bg-red-600", icon: FaFire },
	water: { color: "bg-blue-500", icon: FaWater },
	grass: { color: "bg-green-500", icon: BiSolidLeaf },
	electric: { color: "bg-yellow-500", icon: AiFillThunderbolt },
	psychic: { color: "bg-pink-700", icon: GiPsychicWaves },
	ice: { color: "bg-cyan-500", icon: FaFire },
	dragon: { color: "bg-indigo-500", icon: FaFire },
	dark: { color: "bg-gray-500", icon: FaFire },
	fairy: { color: "bg-pink-500", icon: FaFire },
	unknown: { color: "", icon: FaFire },
	shadow: { color: "", icon: FaFire },
};
