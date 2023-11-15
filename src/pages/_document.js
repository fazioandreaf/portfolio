import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
				/>
				<link rel="manifest" href="./manifest.json" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
