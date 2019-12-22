import * as Koa from 'koa';
import * as Router from 'koa-router';

import { productRoutes } from './routes/products';

const app = new Koa();
const router = new Router();

router.get('/product', productRoutes.getProductsRoute);

router.get('/product/:productId', productRoutes.getProductByIdRoute);

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
