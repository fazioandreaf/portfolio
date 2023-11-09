import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
				/>
				<link rel="manifest" href="./../../public/manifest.json" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;