import React from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';

function VideoPlayer({opts, ...props}: YouTubeProps) {
	const defaultOpts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	};

	return <YouTube opts={Object.assign({}, defaultOpts, opts)} onReady={(e) => e.target.pauseVideo()} {...props} />;
}

export default VideoPlayer;
