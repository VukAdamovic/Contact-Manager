export const validateFormData = (data) => {
	const errors = {};
	
	if (!data.firstName) {
		errors.firstName = "First name is required.\nPlease enter your first name.";
	}
	
	if (!data.lastName) {
		errors.lastName = "Last name is required.\nPlease enter your last name.";
	}
	
	if (!data.email) {
		errors.email = "Email is required.\nPlease enter your email address.";
	} else if (!/\S+@\S+\.\S+/.test(data.email)) {
		errors.email = "Email is invalid.\nPlease enter a valid email address (e.g., example@example.com).";
	}
	
	if (!data.phoneNumber) {
		errors.phoneNumber = "Phone number is required.\nPlease enter your phone number.";
	} else {
		const cleanedPhoneNumber = data.phoneNumber.replace(/[\s\-+]/g, "");
		if (!/^\d{10,15}$/.test(cleanedPhoneNumber)) {
			errors.phoneNumber = "Phone number is invalid.\nPlease enter a valid phone number with 10 to 15 digits.";
		}
	}
	
	return errors;
};
