import express from 'express';
import routes from './Routes.ts/Routes';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
