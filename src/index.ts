import * as Koa from 'koa';
const cors = require('@koa/cors');

import ProductRouter from './routes/products';
import { apikeyMiddleware } from './middleware/apikey';

const app: Koa = new Koa();
app.use(cors());

// Middlewares
app.use(apikeyMiddleware);

// Routes
app.use(ProductRouter);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
