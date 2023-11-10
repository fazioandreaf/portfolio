const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	transpilePackages: ['three'],
	images: {unoptimized: true},
	webpack: (config) => {
		config.module.rules.push({
			test: '/.(woff|woff2|eot|ttf|otf)$',
			use: {
				loader: 'file-loader',
				options: {
					name: './src/style/fonts/*.ttf', // Percorso in cui verranno copiati i font
				},
			},
		});

		return config;
	},
	output: 'export',
};
