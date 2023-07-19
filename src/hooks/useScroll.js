import { useEffect, useRef, useState } from "react";

const SCROLL_AMOUNT = 400;

const useScroll = () => {
	const scrollRef = useRef(null);
	const [showLeftButton, setShowLeftButton] = useState(false);
	const [showRightButton, setShowRightButton] = useState(true);

	const handleScrollLeft = () => {
		// Scroll left if container exists
		if (scrollRef.current) {
			scrollRef.current.scroll({
				left: scrollRef.current.scrollLeft - SCROLL_AMOUNT,
				behavior: "smooth",
			});
		}
	};

	const handleScrollRight = () => {
		// Scroll right if container exists
		if (scrollRef.current) {
			scrollRef.current.scroll({
				left: scrollRef.current.scrollLeft + SCROLL_AMOUNT,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			// Update state if scroll container exists
			if (scrollRef.current) {
				setShowLeftButton(scrollRef.current.scrollLeft > 0);
				setShowRightButton(
					scrollRef.current.scrollLeft + scrollRef.current.offsetWidth <
						scrollRef.current.scrollWidth
				);
			}
		};

		// Add scroll event listener
		if (scrollRef.current) {
			scrollRef.current.addEventListener("scroll", handleScroll);
		}

		// Remove scroll event listener
		return () => {
			if (scrollRef.current) {
				scrollRef.current.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return {
		scrollRef,
		showLeftButton,
		showRightButton,
		handleScrollLeft,
		handleScrollRight,
	};
};

export default useScroll;
