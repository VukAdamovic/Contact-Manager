import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/reduxStore.js";
import { Provider } from "react-redux";


createRoot( document.getElementById( "app" ) ).render(
	<Provider store={ store }>
		<App/>
	</Provider>
);
