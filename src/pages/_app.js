import './../style/global.scss';

import LayoutRoot from './../components/LayoutRoot';

export default function App({Component, pageProps}) {
	return (
		<LayoutRoot>
			<Component {...pageProps} />
		</LayoutRoot>
	);
}
