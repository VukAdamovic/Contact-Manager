import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import searchIcon from "../../assets/search.svg";
import { allowSearch, disallowSearch, setSearchInput } from "../../store/searchSlice.js";
import styles from "./SearchBar.module.css";
import { motion } from "framer-motion";

export default function SearchBar() {
	const dispatch = useDispatch();
	const location = useLocation();
	const searchInput = useSelector((state) => state.searchSlice.searchInput);
	const isAllowed = useSelector((state) => state.searchSlice.allowSearch);
	
	useEffect(() => {
		const currentPath = location.pathname;
		
		if (currentPath === "/" || currentPath === "/deletedContacts") {
			dispatch(allowSearch());
		} else {
			dispatch(disallowSearch());
			dispatch(setSearchInput(""));
		}
		
	}, [location, dispatch]);
	
	const handleInputChange = (event) => {
		dispatch(setSearchInput(event.target.value));
	};
	
	return (
		<motion.div
			id={styles["search-bar"]}
			whileHover={{ boxShadow: "0px 0px 5px rgba(64, 224, 208, 0.5)" }}
			whileTap={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 200 }}
		>
			<img src={searchIcon} alt="Search icon" className="no-copy" />
			<input
				type="text"
				value={isAllowed ? searchInput : ""}
				placeholder="Search"
				autoComplete="new-password"
				onChange={handleInputChange}
				disabled={!isAllowed}
			/>
		</motion.div>
	);
}
