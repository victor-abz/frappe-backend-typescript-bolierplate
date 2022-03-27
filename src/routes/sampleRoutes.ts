import { Router } from 'express';

export const sampleRoutes = (app: Router) => {
	app.get('/hello', (req, res) => {
		res.send('hello world');
	});
};
