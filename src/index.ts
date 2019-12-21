import * as Koa from 'koa';
import * as Router from 'koa-router';

import { getProductsRoute } from './routes/products';

const app = new Koa();
const router = new Router();

router.get('/product', getProductsRoute);

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
