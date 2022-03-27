import { Router } from 'express';
import { sampleRoutes } from './sampleRoutes';

export default {
	setup(app: Router) {
		sampleRoutes(app);
	},
};
