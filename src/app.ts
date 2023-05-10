import express from 'express';
import routes from './Routes/Routes';
import MiddlewareError from './Middleware/error';

const app = express();
app.use(express.json());
app.use(routes);
app.use(MiddlewareError.dealWith);

export default app;
