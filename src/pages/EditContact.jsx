import { motion } from "framer-motion";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import cakeIcon from "../assets/cake.svg";
import profileIcon from "../assets/contact.svg";
import descriptionIcon from "../assets/description.svg";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import plusIcon from "../assets/plus.svg";
import Button from "../components/button/Button.jsx";
import Input from "../components/input/Input.jsx";
import Contact from "../models/contact.js";
import styles from "./addContact/AddContact.module.css";
import { updateContact } from "../services/contactService.js";
import { validateFormData } from "../utils/validation.js";

export default function EditContact(){
	const contact = useLoaderData();
	const [ errors, setErrors ] = useState( {} );
	const [ successMessage, setSuccessMessage ] = useState( "" );
	const navigate = useNavigate();
	
	function handleUpdateContact( event ){
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
		
		const editedContact = new Contact( data.firstName, data.lastName, data.email ,data.phoneNumber, data.birthday, data.description );
		
		updateContact( contact.id, editedContact )
			.then( () => {
				setSuccessMessage( "Contact successfully updated!" );
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
			<h3>Update contact</h3>
			<form onSubmit={ handleUpdateContact } onChange={ resetErrors }>
				<Input img={ profileIcon } type="text" name="firstName" placeholder="First name"
					   defaultValue={ contact.firstName }/>
				{ errors.firstName && <pre className={ styles.error }>{ errors.firstName }</pre> }
				
				<Input img={ profileIcon } type="text" name="lastName" placeholder="Last name"
					   defaultValue={ contact.lastName }/>
				{ errors.lastName && <pre className={ styles.error }>{ errors.lastName }</pre> }
				
				<Input img={ emailIcon } type="email" name="email" placeholder="Email" defaultValue={ contact.email }/>
				{ errors.email && <pre className={ styles.error }>{ errors.email }</pre> }
				
				<Input img={ phoneIcon } type="tel" name="phoneNumber" placeholder="Phone number"
					   defaultValue={ contact.phone }/>
				{ errors.phoneNumber && <pre className={ styles.error }>{ errors.phoneNumber }</pre> }
				
				<Input img={ cakeIcon } type="date" name="birthday" placeholder="Birthday"
					   defaultValue={ contact.birthday }/>
				
				<Input img={ descriptionIcon } textArea name="description" placeholder="Description"
					   defaultValue={ contact.description }/>
				
				<Button icon={ plusIcon } className={ styles["w-100"] }>
					Update Contact
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


