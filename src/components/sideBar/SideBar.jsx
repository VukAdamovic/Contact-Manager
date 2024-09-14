import { useEffect, useRef } from "react";
import plusIcon from "../../assets/plus.svg";
import trashIcon from "../../assets/trash.svg";
import profileIcon from "../../assets/contact.svg";
import { hideSidebar } from "../../store/sideBarSlice.js";
import Button from "../button/Button.jsx";
import styles from "./SideBar.module.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SideBar(){
	
	const sidebarRef = useRef();
	const dispatch = useDispatch();
	const isOpen = useSelector( state => state.sideBarSlice.showSideBar );
	const navigate = useNavigate();
	
	useEffect( () => {
		const handleClickOutside = ( event ) => {
			if ( sidebarRef.current && !sidebarRef.current.contains( event.target ) ) {
				dispatch( hideSidebar() );
			}
		};
		
		document.addEventListener( "mousedown", handleClickOutside );
		return () => document.removeEventListener( "mousedown", handleClickOutside );
	}, [ dispatch ] );
	
	function handleCreateContact(){
		dispatch( hideSidebar() );
		navigate( "/new" );
	}
	
	function handleContactList(){
		dispatch( hideSidebar() );
		navigate( "/" );
	}
	
	function handleDeletedContacts(){
		dispatch( hideSidebar() );
		navigate( "/deletedContacts" );
	}
	
	
	return (
		<motion.div
			ref={ sidebarRef }
			id={ styles["side-bar"] }
			initial={ { x: "-200px", opacity: 0 } }
			animate={ { x: isOpen ? 0 : "-200px", opacity: isOpen ? 1 : 0 } }
			exit={ { x: "-200px", opacity: 0 } }
			transition={ { type: "tween", duration: 0.3 } }
		>
			<motion.div
				initial={ { opacity: 0, scale: 0.8 } }
				animate={ { opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 } }
				transition={ { duration: 0.3, delay: 0.1 } }
				className={ styles["w-100"] }
			>
				<Button icon={ plusIcon }
						className={ styles["w-100"] }
						onClick={ handleCreateContact }
				>
					Create Contact
				</Button>
			</motion.div>
			
			<motion.div
				initial={ { opacity: 0, scale: 0.8 } }
				animate={ { opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 } }
				transition={ { duration: 0.3, delay: 0.2 } }
				className={ styles["w-100"] }
			>
				<Button
					icon={ profileIcon }
					className={ styles["w-100"] }
					onClick={ handleContactList }
				>
					Contacts
				</Button>
				
			</motion.div>
			
			<motion.div
				initial={ { opacity: 0, scale: 0.8 } }
				animate={ { opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 } }
				transition={ { duration: 0.3, delay: 0.3 } }
				className={ styles["w-100"] }
			>
				<Button
					icon={ trashIcon }
					className={ styles["w-100"] }
					onClick={ handleDeletedContacts }
				>
					Deleted Contacts
				</Button>
			</motion.div>
		</motion.div>
	);
}