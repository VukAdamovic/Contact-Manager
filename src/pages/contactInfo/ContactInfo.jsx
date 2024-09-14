import { DeleteIcon, EditIcon, RecoverIcon } from "../../components/icons/Icons.jsx";
import { deleteContact, removeContact, updateContact } from "../../services/contactService.js";
import styles from "./ContactInfo.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import contactIcon from "../../assets/contact.svg";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone.svg";
import birthdayIcon from "../../assets/cake.svg";
import descriptionIcon from "../../assets/description.svg";
import { motion } from "framer-motion";

const svgVariants = {
	hover: { stroke: "#3498db", transition: { duration: 0.3 } },
	hoverDelete: { stroke: "#e74c3c", transition: { duration: 0.3 } },
	hoverContact: { stroke: "#40E0D0", transition: { duration: 0.3 } }
};

// Animacije za svaku informaciju
const infoVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	whileHover: { scale: 1.05, transition: { duration: 0.2 } }
};

export default function ContactInfo(){
	const contact = useLoaderData();
	const navigate = useNavigate();
	
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
				navigate( "/" );
			} )
			.catch( error => {
				console.error( error );
			} );
	}
	
	function handlePermanentlyDeleteContact(){
		removeContact( contact.id )
			.then( () => {
				navigate( "/" );
			} ).catch( error => {
			console.error( error );
		} );
	}
	
	return (
		<motion.div
			id={ styles["contact-info"] }
			initial={ { opacity: 0, scale: 0.9 } }
			animate={ { opacity: 1, scale: [ 0.9, 1.05, 1 ] } }
			exit={ { opacity: 0, scale: 0.9 } }
			transition={ { duration: 0.8, ease: "easeInOut" } }
		>
			<img src={ contactIcon } alt="Contact Icon" className={ `no-copy ${styles["contact-img"]}`}/>
			<h1>{ `${ contact.firstName } ${ contact.lastName }` } </h1>
			
			<div className={ styles["information-container"] }>
				<h4>Contact details</h4>
				
				<motion.div
					className={ styles["informations"] }
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<motion.div className={ styles["information"] } variants={ infoVariants } whileHover="whileHover">
						<img src={ emailIcon } alt="Email Icon" className="no-copy"/>
						<p>{ contact.email }</p>
					</motion.div>
					
					<motion.div className={ styles["information"] } variants={ infoVariants } whileHover="whileHover">
						<img src={ phoneIcon } alt="Phone Icon" className="no-copy"/>
						<p>{ contact.phone }</p>
					</motion.div>
					
					<motion.div className={ styles["information"] } variants={ infoVariants } whileHover="whileHover">
						<img src={ birthdayIcon } alt="Birthday Icon" className="no-copy"/>
						<p>{ contact.birthday }</p>
					</motion.div>
					
					<motion.div className={ styles["information"] } variants={ infoVariants } whileHover="whileHover">
						<img src={ descriptionIcon } alt="Description Icon" className="no-copy"/>
						<p>{ contact.description }</p>
					</motion.div>
					
				</motion.div>
				
				<div className={ styles["btn-actions"] }>
					{
						contact.deleted ?
							<>
								<motion.button
									whileHover={ { scale: 1.2 } }
									whileTap={ { scale: 0.9 } }
									transition={ { type: "spring", stiffness: 400, damping: 10 } }
									onClick={ handleRecoverContact }
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
									onClick={ handlePermanentlyDeleteContact }
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
									onClick={ handleEditContact }
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
									onClick={ handleDeleteContact }
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
			</div>
		</motion.div>
	);
}
