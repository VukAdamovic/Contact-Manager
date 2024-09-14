import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AddContact from "./pages/addContact/AddContact.jsx";
import ContactInfo from "./pages/contactInfo/ContactInfo.jsx";
import DeletedContacts from "./pages/deletedContacts/DeletedContacts.jsx";
import EditContact from "./pages/EditContact.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/home/Home.jsx";
import { getAllContactsLoader, contactInfoLoader, getDeletedContactsLoader } from "./services/loaders.js";
import "./index.css";

const router = createBrowserRouter( [
	{
		path: "/",
		element: <MainLayout/>,
		errorElement: <Error/>,
		children: [
			{ index: true, element: <Home/>, loader: getAllContactsLoader },
			{ path: ":id", element: <ContactInfo/> , loader: contactInfoLoader },
			{ path: "edit/:id", element: <EditContact/>, loader: contactInfoLoader },
			{ path: "new", element: <AddContact/> },
			{ path: "deletedContacts", element: <DeletedContacts/>, loader: getDeletedContactsLoader }
		]
	}
] );


function App(){
	
	return (
		<RouterProvider router={ router }/>
	);
}

export default App;
