import server from 'frappe-backend/server';
import { testMid } from './middleware/sample.middleware';
import models from './models'; // Import Models created by CLI
import routes from './routes'; // Import Custom Routes

server.start({
	backend: 'pg', // To start a postgres backend.
	connectionParams: {
		db_name: process.env.DB_NAME, // Existing postgres database name
		username: process.env.DB_USERNAME, // Database username
		password: process.env.DB_PWD, // Database password
		host: process.env.DB_HOST, // Database host
		client: 'pg', // Database client. options are [pg]
	},
	enableCORS: true,
	models, // this will contain your database models
	routes,
	middlewareList: [testMid(124), testMid(5)],
});
