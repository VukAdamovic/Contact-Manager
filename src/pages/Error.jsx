import { useRouteError } from "react-router";

export default function Error(){
	const error = useRouteError();
	
	// Default values
	let message = "An unexpected error occurred";
	let title = "An Error occurred";
	
	if ( error?.status === 404 ) {
		message = "The page you are looking for does not exist.";
		title = "Page not found";
	} else if ( error?.status === 500 ) {
		try {
			const { message: errorMessage } = JSON.parse( error.data );
			message = errorMessage || "Internal Server Error.";
		} catch {
			message = "Failed to parse error message.";
		}
	}
	
	return (
		<div>
			<div className="text-center">
				<h1>{ title }</h1>
				<p>{ message }</p>
			</div>
		</div>
	);
}
