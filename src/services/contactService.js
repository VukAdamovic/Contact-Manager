import axiosInstance from "../utils/axios.js";

//Kreiranje novog kontakta
export function createContact( contact ){
	return axiosInstance
		.post( `/contacts.json`, contact ) // POST generiše novi ključ u Firebase
		.then( response => {
			const contactId = response.data.name; // Ovo je Firebase generisani ključ
			return axiosInstance
				.patch( `/contacts/${ contactId }.json`, { id: contactId } ) // Dodeli ID kontaktu
				.then( () => {
					return { ...contact, id: contactId };
				} );
		} )
		.catch( () => {
			throw new Error( "Failed to create contact" );
		} );
}


// Dohvatanje svih kontakata
export function getAllContacts(){
	return axiosInstance
		.get( "/contacts.json" )
		.then( response => {
			const contactsData = response.data;
			
			// Provera da li postoji kontakt podaci
			if (!contactsData) {
				return [];
			}
			
			const contactsArray = Object.values( contactsData );
			
			return contactsArray.filter( contact => !contact.deleted );
		} )
		.catch( () => {
			throw new Error( "Failed to load contacts" );
		} );
}

// Dohvatanje svih obrisanih kontakata
export function getDeletedContacts(){
	return axiosInstance
		.get( "/contacts.json" )
		.then( response => {
			const contactsData = response.data;
			
			// Provera da li postoji kontakt podaci
			if (!contactsData) {
				return [];
			}
			
			const contactsArray = Object.values( contactsData );
			
			return contactsArray.filter( contact => contact.deleted );
		} )
		.catch( () => {
			throw new Error( "Failed to load contacts" );
		} );
}


// Dohvatanje kontakta po ID-ju
export function getContactById( id ){
	return axiosInstance
		.get( `/contacts/${ id }.json` )
		.then( response => {
			return response.data;
			
		} )
		.catch( () => {
			throw new Error( "Failed to load contact" );
		} );
}

// Ažuriranje postojećeg kontakta
export function updateContact( id, updatedFields ){
	return axiosInstance
		.patch( `/contacts/${ id }.json`, updatedFields )
		.then( response => {
			return response.data;
		} )
		.catch( () => {
			throw new Error( "Failed to update contact" );
		} );
}


// Logičko brisanje kontakta (postavljanje 'deleted' na true)
export function deleteContact( id ){
	return axiosInstance
		.patch( `/contacts/${ id }.json`, { deleted: true } )
		.then( response => {
			return response.data;
		} )
		.catch( error => {
			console.error( "Error marking contact as deleted:", error );
			throw error;
		} );
}

// Fizičko brisanje kontakta iz baze podataka
export function removeContact( id ){
	return axiosInstance
		.delete( `/contacts/${ id }.json` )
		.then( response => {
			return response.data;
		} )
		.catch( error => {
			console.error( "Error deleting contact from database:", error );
			throw error;
		} );
}




