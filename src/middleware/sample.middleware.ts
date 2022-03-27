import { NextFunction, Request, Response } from 'express';

export const testMid = (number: number) => {
	return function (req: Request, res: Response, next: NextFunction) {
		if (number > 10) {
			return res.status(404).json({ message: 'Error found' });
		}
		next();
	};
};
