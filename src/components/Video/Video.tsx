import React, {useState} from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';

import Skeleton from './../Skeleton';

const Video = ({opts, ...props}: YouTubeProps) => {
	const defaultOpts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	};

	const [loaded, setLoaded] = useState(true);

	return (
		<>
			<YouTube
				opts={Object.assign({}, defaultOpts, opts)}
				onReady={(e) => {
					e.target.pauseVideo();
					setLoaded(false);
					console.log(loaded, 'loaded');
				}}
				{...props}
			/>
			{loaded && <Skeleton />}
		</>
	);
};

export default Video;
