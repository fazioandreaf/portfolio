import React, {Suspense} from 'react';

import HomepageComponent from './../components/HomepageComponent';
import Logo from './../components/Logo';

const Homepage = () => {
	return (
		<Suspense fallback={<Logo />}>
			<HomepageComponent />
		</Suspense>
	);
};

export default Homepage;
