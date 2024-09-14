import styles from "./Input.module.css";
import { motion } from "framer-motion";

export default function Input( { img, textArea, type, ...props } ){
	return (
		<div id={ styles["input"] }>
			{
				props.placeholder === "Last name" ?
					<motion.img src={ img } alt="icon" className="no-copy" initial={ { opacity: 0 } }/>
					:
					<img src={ img } alt="icon" className="no-copy"/>
			}
			
			{
				textArea ? <motion.textarea
						{ ...props }
						autoComplete="new-password"
						whileHover={ { outline: "0.5px solid rgb(64, 224, 208, 50)" } }
						whileTap={ { scale: 1.02 } }
						transition={ { type: "spring", stiffness: 200 } }
					/>
					:
					<motion.input
						type={ type }
						spellCheck="false"
						autoComplete="off"
						aria-autocomplete="none"
						{ ...props }
						whileHover={ { outline: "0.5px solid rgb(64, 224, 208, 50)" } }
						whileTap={ { scale: 1.02 } }
						transition={ { type: "spring", stiffness: 200 } }
					/>
			}
		</div>
	);
}