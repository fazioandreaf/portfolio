'use client'; // Error components must be Client Components

import {useEffect} from 'react';

import Maintenance from 'baseComponents/Maintenance';

export default function Error({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong wrong wrong!</h2>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
			<Maintenance />
		</div>
	);
}
