import styles from "./Button.module.css";
import { motion } from "framer-motion";

export default function Button( { children, icon, className, onClick } ){
	return (
		<motion.button id={ styles["btn"] } className={ `${ className } no-text-copy` }
					   whileHover={ { scale: 1.1, backgroundColor: "#FF6347" } }
					   whileTap={ { scale: 0.9, backgroundColor: "#FF4500" } }
					   transition={ { type: "spring", stiffness: 200 } }
					   onClick={ onClick }
		>
			<span className={ `no-copy ${ styles["plusIcon"] }` }> <img src={ icon } alt="icon"/> </span>
			{ children }
		</motion.button>
	);
}