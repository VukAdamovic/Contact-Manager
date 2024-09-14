import axios from "axios";

const axiosInstance = axios.create( {
	baseURL: "https://contacts-graduation-project-default-rtdb.europe-west1.firebasedatabase.app/",
	headers: {
		"Content-Type": "application/json"
	},
} );

export default axiosInstance;