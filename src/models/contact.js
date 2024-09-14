export default class Contact {
	constructor( firstName, lastName, email, phone, birthday, description, deleted = false) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.birthday = birthday;
		this.description = description;
		this.deleted = deleted;
	}
}
