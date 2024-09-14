import hamburger from "../../assets/hamburger.svg";
import SearchBar from "../searchBar/SearchBar.jsx";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sideBarSlice.js";

export default function Header(){
	
	const isOpen = useSelector( state => state.sideBarSlice.showSideBar );
	const dispatch = useDispatch();
	
	function toggleSideBar(){
		dispatch( toggleSidebar() );
	}
	
	return (
		<header id={ styles["header"] }>
			
			<motion.button
				
				whileHover={ { rotate: 180 } }
				transition={ { type: "spring", stiffness: 50 } }
				onClick={ toggleSideBar }
				disabled={ isOpen }
				animate={ { opacity: isOpen ? 0 : 1 } }
			>
				<img src={ hamburger } alt="hamburger" className="no-copy"/>
			</motion.button>
			
			<SearchBar/>
			
			<motion.div
				id={ styles["logo"] }
				whileHover={ { scale: 1.1, rotate: 10 } }
				transition={ { type: "spring", stiffness: 300 } }
				className="no-text-copy"
			>
				<img src={ logo } alt="Logo" className="no-copy"/>
				<p>Contacts</p>
			</motion.div>
		</header>
	);
}