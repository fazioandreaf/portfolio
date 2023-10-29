import React, {Suspense} from 'react';

import HomepageComponent from 'baseComponents/HomepageComponent';
import Logo from 'baseComponents/Logo';

const Homepage = () => {
	return (
		<Suspense fallback={<Logo />}>
			<HomepageComponent />
		</Suspense>
	);
};

export default Homepage;
