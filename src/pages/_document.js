import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
				/>
				<link rel="manifest" href="./manifest.json" />
				<title>Andrea Fazio - Full Stack Developer</title>
				<meta property="og:image" content="/src/assets/ln-account.png" />
				<meta property="og:description" content="Andrea Fazio Portfolio -  Full Stack Developer" />
				<meta property="og:url" content="https://fazioandrea.me" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Andrea Fazio Portfolio -  Full Stack Developer" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
