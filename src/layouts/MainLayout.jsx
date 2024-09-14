import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import SideBar from "../components/sideBar/SideBar.jsx";
import { AnimatePresence } from "framer-motion";

export default function MainLayout(){
	
	const isOpen = useSelector( state => state.sideBarSlice.showSideBar );
	
	return (
		<>
			<AnimatePresence>
				{ isOpen && <SideBar/> }
			</AnimatePresence>
			<Header/>
			<main>
				<AnimatePresence>
					<Outlet/>
				</AnimatePresence>
			</main>
		</>
	);
}