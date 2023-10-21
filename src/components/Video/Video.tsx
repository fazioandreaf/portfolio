import React from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';

function VideoPlayer({opts}: YouTubeProps) {
	const defaultOpts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div>
			<YouTube
				videoId="CL_DMABCj58"
				opts={Object.assign({}, defaultOpts, opts)}
				onReady={(e) => e.target.pauseVideo()}
			/>
		</div>
	);
}

export default VideoPlayer;
