import styles from "./ContactItem.module.css";
import { ContactIcon, EditIcon, DeleteIcon, RecoverIcon } from "../../icons/Icons.jsx"; // Importuj ikone
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { deleteContact, updateContact, removeContact } from "../../../services/contactService.js";

const svgVariants = {
	hover: { stroke: "#3498db", transition: { duration: 0.3 } },
	hoverDelete: { stroke: "#e74c3c", transition: { duration: 0.3 } },
	hoverContact: { stroke: "#40E0D0", transition: { duration: 0.3 } }
};

export default function ContactItem( { contact } ){
	const navigate = useNavigate();
	
	function formatPhoneNumber( phone ){
		const cleaned = phone.replace( /\D/g, "" );
		
		if ( cleaned.length < 10 || cleaned.length > 15 ) {
			return phone;
		}
		
		if ( cleaned.length > 6 ) {
			return `${ cleaned.slice( 0, 3 ) }-${ cleaned.slice( 3, 6 ) }-${ cleaned.slice( 6 ) }`;
		} else if ( cleaned.length > 3 ) {
			return `${ cleaned.slice( 0, 3 ) }-${ cleaned.slice( 3 ) }`;
		} else {
			return cleaned;
		}
	}
	
	function handleDeleteContact(){
		deleteContact( contact.id )
			.then( () => {
				navigate( "/" );
			} )
			.catch( error => {
				console.error( error );
			} );
	}
	
	function handleEditContact(){
		navigate( `/edit/${ contact.id }` );
	}
	
	function handleRecoverContact(){
		updateContact( contact.id, { deleted: false } )
			.then( () => {
				navigate( "/deletedContacts" );
			} )
			.catch( error => {
				console.error( error );
			} );
	}
	
	function handlePermanentlyDeleteContact(){
		removeContact( contact.id )
			.then( () => {
				navigate( "/deletedContacts" );
			} ).catch( error => {
			console.error( error );
		} );
	}
	
	
	return (
		<motion.div
			id={ styles["contact-item"] }
			whileHover={ { scale: 1.02 ,backgroundColor: "rgba(67, 67, 67, 0.8)" } }
		>
			<ContactIcon
				variants={ svgVariants }
				whileHover="hoverContact"
				whileTap="hoverContact"
				initial={ { scale: 1, stroke: "#f8f8f8" } }
				animate={ { scale: 1.1 } }
				transition={ { duration: 0.4 } }
			/>
			
			<div id={ styles["contact-item-name-phone"] }>
				<motion.h4 whileHover={ { scale: 1.1 } }>
					{ `${ contact.firstName } ${ contact.lastName }` }
				</motion.h4>
				<p>{ formatPhoneNumber( contact.phone ) }</p>
			</div>
			
			<div id={ styles["btn-actions"] }>
				{
					contact.deleted ?
						<>
							<motion.button
								whileHover={ { scale: 1.2 } }
								whileTap={ { scale: 0.9 } }
								transition={ { type: "spring", stiffness: 400, damping: 10 } }
								onClick={ ( event ) => {
									event.stopPropagation();
									handleRecoverContact();
								} }
							>
								<RecoverIcon
									variants={ svgVariants }
									whileHover="hover"
									whileTap="hover"
									initial={ { scale: 1, stroke: "#f8f8f8" } }
								/>
							</motion.button>
							
							<motion.button
								whileHover={ { scale: 1.2 } }
								whileTap={ { scale: 0.9, border: "none", outline: "none", boxShadow: "none" } }
								transition={ { type: "spring", stiffness: 400, damping: 10 } }
								onClick={ ( event ) => {
									event.stopPropagation();
									handlePermanentlyDeleteContact();
								} }
							>
								<DeleteIcon
									variants={ svgVariants }
									whileHover="hoverDelete"
									whileTap="hoverDelete"
									initial={ { scale: 1, stroke: "#f8f8f8" } }
								/>
							</motion.button>
						</>
						:
						<>
							<motion.button
								whileHover={ { scale: 1.2 } }
								whileTap={ { scale: 0.9 } }
								transition={ { type: "spring", stiffness: 400, damping: 10 } }
								onClick={ ( event ) => {
									event.stopPropagation();
									handleEditContact();
								} }
							>
								<EditIcon
									variants={ svgVariants }
									whileHover="hover"
									whileTap="hover"
									initial={ { scale: 1, stroke: "#f8f8f8" } }
								/>
							</motion.button>
							
							<motion.button
								whileHover={ { scale: 1.2 } }
								whileTap={ { scale: 0.9, border: "none", outline: "none", boxShadow: "none" } }
								transition={ { type: "spring", stiffness: 400, damping: 10 } }
								onClick={ ( event ) => {
									event.stopPropagation();
									handleDeleteContact();
								} }
							>
								<DeleteIcon
									variants={ svgVariants }
									whileHover="hoverDelete"
									whileTap="hoverDelete"
									initial={ { scale: 1, stroke: "#f8f8f8" } }
								/>
							</motion.button>
						</>
				}
			</div>
		</motion.div>
	);
}
