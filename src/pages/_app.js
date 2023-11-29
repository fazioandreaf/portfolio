import './../style/global.scss';

import LayoutRoot from './../components/LayoutRoot';

const App = ({Component, pageProps}) => {
	return (
		<LayoutRoot>
			<Component {...pageProps} />
		</LayoutRoot>
	);
};

export default App;
