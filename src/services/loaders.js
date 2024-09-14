import { getContactById, getAllContacts, getDeletedContacts } from './contactService.js';

export function contactInfoLoader({ params }){
	const { id } = params;
	
	return getContactById(id)
		.then(data => {
			
			return data;
		})
		.catch( error => {
			throw new Response(
				JSON.stringify({ message: error.message }),
				{
					status: error.message.includes("not found") ? 404 : 500,
					statusText: error.message
				}
			);
		});
	
}


export function getAllContactsLoader() {
	return getAllContacts()
		.then(data => {
			return data;
		})
		.catch( error => {
			throw new Response(JSON.stringify({ message: error.message }), { status: 500 });
		});
}

export function getDeletedContactsLoader() {
	return getDeletedContacts()
		.then(data => {
			return data;
		})
		.catch( error => {
			throw new Response(JSON.stringify({ message: error.message }), { status: 500 });
		});
}

