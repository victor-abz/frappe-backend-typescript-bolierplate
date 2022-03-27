module.exports = {
	dev: {
		devServerPort: process.env.PORT || 3000,
		devServerHost: 'localhost',
	},
	baseDir: './src',
	useEs6: true,
	node: {
		paths: {
			main: './dist/app.js',
		},
	},
};
