import { useSelector } from "react-redux";
import ContactItem from "../../components/contact/item/ContactItem.jsx";
import styles from "./Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useLoaderData, useNavigate } from "react-router-dom";


export default function Home(){
	const contacts = useLoaderData();
	const navigate = useNavigate();
	const searchInput = useSelector((state) => state.searchSlice.searchInput);
	
	
	function handleContactClick( id ){
		navigate( `${ id }` );
	}
	
	const filteredContacts = contacts.filter(contact =>
		contact.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
		contact.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
		contact.email.toLowerCase().includes(searchInput.toLowerCase())
	);
	
	
	return (
		<div id={ styles["home-container"] }>
			<motion.h1
				initial={ { scale: 1, opacity: 0 } }
				animate={ { scale: 1.1, opacity: 1 } }
				transition={ { duration: 0.3 } }
				className="no-text-copy"
			>
				Contacts
			</motion.h1>
			
			{
				<AnimatePresence mode="wait">
					{
						filteredContacts.length > 0 &&
						<motion.ul
							key="contacts"
							initial={ { opacity: 0 } }
							animate={ { opacity: 1 } }
							exit={ { opacity: 0, scale: 0.8, transition: { duration: 0.5 } } }
							transition={ { duration: 0.5, staggerChildren: 0.2 } }
						>
							<AnimatePresence>
								{
									filteredContacts.map( ( contact, index ) => {
										return (
											<motion.li
												layout
												key={ contact.id }
												initial={ { opacity: 0, y: 20 } }
												animate={ { opacity: 1, y: 0 } }
												exit={ { opacity: 0, scale: 0.8, transition: { duration: 0.5 } } }
												transition={ { duration: 0.5, delay: index * 0.1 } }
												onClick={ () => handleContactClick( contact.id ) }
											>
												<ContactItem contact={ contact }/>
											</motion.li>
										);
									} )
								}
							</AnimatePresence>
						</motion.ul>
					}
					
					{
						filteredContacts.length === 0 &&
						<p key="no-contacts">No contacts found</p>
					}
				</AnimatePresence>
			}
		</div>
	);
}



