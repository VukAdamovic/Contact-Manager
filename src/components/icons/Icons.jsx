// src/utils/icons.jsx
import { motion } from "framer-motion";

// Komponenta za Contact ikonu
export const ContactIcon = ( props ) => (
	<motion.svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor" // Postavi na currentColor da bi mogao da koristiš CSS varijable za boje
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={ { border: "none", outline: "none", boxShadow: "none" } }
		{ ...props }
	>
		<path
			d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"/>
		<path
			d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"/>
	</motion.svg>
);

// Komponenta za Edit ikonu
export const EditIcon = ( props ) => (
	<motion.svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={ { border: "none", outline: "none", boxShadow: "none" } }
		{ ...props }
	>
		<path
			d="M3 17.25v4.25h4.25L16.5 8.5l-4.25-4.25L3 13.75zM22.5 4.5a1.5 1.5 0 0 0-2.12 0l-3.38 3.38 2.12 2.12 3.38-3.38a1.5 1.5 0 0 0 0-2.12z"/>
	</motion.svg>
);

// Komponenta za Delete ikonu
export const DeleteIcon = ( props ) => (
	<motion.svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={ { border: "none", outline: "none", boxShadow: "none" } }
		{ ...props }
	>
		<path d="M6 6L18 18M18 6L6 18"/>
	</motion.svg>
);

// Komponenta za Recover ikonu
export const RecoverIcon = (props) => (
	<motion.svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={{ border: "none", outline: "none", boxShadow: "none" }}
		{...props}
	>
		<path d="M19 12v1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8a8 8 0 0 1 7.32 4.668M19 5v6h-6" />
	</motion.svg>
);
