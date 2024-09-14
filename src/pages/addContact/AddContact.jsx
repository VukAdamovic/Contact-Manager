import { useState } from "react";
import plusIcon from "../../assets/plus.svg";
import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";
import profileIcon from "../../assets/contact.svg";
import emailIcon from "../../assets/email.svg";
import cakeIcon from "../../assets/cake.svg";
import phoneIcon from "../../assets/phone.svg";
import descriptionIcon from "../../assets/description.svg";
import Contact from "../../models/contact.js";
import styles from "./AddContact.module.css";
import { validateFormData } from "../../utils/validation.js";
import { motion } from "framer-motion";
import { createContact } from "../../services/contactService.js";
import { useNavigate } from "react-router-dom";

export default function AddContact(){
	const [ errors, setErrors ] = useState( {} );
	const [ successMessage, setSuccessMessage ] = useState( "" );
	const navigate = useNavigate();
	
	function handleCreateContact( event ){
		event.preventDefault();
		
		const formData = new FormData( event.target );
		const data = {
			firstName: formData.get( "firstName" ),
			lastName: formData.get( "lastName" ),
			email: formData.get( "email" ),
			phoneNumber: formData.get( "phoneNumber" ),
			birthday: formData.get( "birthday" ),
			description: formData.get( "description" )
		};
		
		const newErrors = validateFormData( data );

		if ( Object.keys( newErrors ).length > 0 ) {
			setErrors( newErrors );
			return;
		}
		
		setErrors( {} );
		const contact = new Contact( data.firstName, data.lastName, data.email,  data.phoneNumber, data.birthday, data.description );
		
		createContact( contact )
			.then( () => {
				setSuccessMessage( "Contact successfully created!" );
				setTimeout( () => {
					navigate( "/" );
				}, 1000 );
			} )
			.catch( error => {
				console.error( error );
			} );
	}
	
	function resetErrors(){
		setErrors( {} );
	}
	
	return (
		<motion.div
			id={ styles["add-contact"] }
			initial={ { opacity: 0, scale: 0.9 } }
			animate={ { opacity: 1, scale: [ 0.9, 1.05, 1 ] } }
			exit={ { opacity: 0, scale: 0.9 } }
			transition={ { duration: 0.8, ease: "easeInOut" } }
		>
			<h3>Create a new contact</h3>
			<form onSubmit={ handleCreateContact } onChange={ resetErrors }>
				<Input img={ profileIcon } type="text" name="firstName" placeholder="First name"/>
				{ errors.firstName && <pre className={ styles.error }>{ errors.firstName }</pre> }
				
				<Input img={ profileIcon } type="text" name="lastName" placeholder="Last name"/>
				{ errors.lastName && <pre className={ styles.error }>{ errors.lastName }</pre> }
				
				<Input img={ emailIcon } type="email" name="email" placeholder="Email"/>
				{ errors.email && <pre className={ styles.error }>{ errors.email }</pre> }
				
				<Input img={ phoneIcon } type="tel" name="phoneNumber" placeholder="Phone number"/>
				{ errors.phoneNumber && <pre className={ styles.error }>{ errors.phoneNumber }</pre> }
				
				<Input img={ cakeIcon } type="date" name="birthday" placeholder="Birthday"/>
				
				<Input img={ descriptionIcon } textArea name="description" placeholder="Description"/>
				
				<Button icon={ plusIcon } className={ styles["w-100"] }>
					Create Contact
				</Button>
			</form>
			
			{ successMessage && (
				<div className={ styles.successMessage }>
					{ successMessage }
				</div>
			) }
		</motion.div>
	);
}
