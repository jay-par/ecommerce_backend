import * as Koa from 'koa';
import * as mongoose from 'mongoose';
import * as Router from 'koa-router';

import { getProducts, getProductById } from '../apis/mongo';

const router: Router = new Router();
const BASE_URL: string = '/api/v1/products';

/**
 * Get all products
 */
router.get(BASE_URL, async (ctx: Koa.Context) => {
  ctx.response.body = await getProducts();
});

/**
 * Get product by id
 */
router.get(`${BASE_URL}/:productId`, async (ctx: Koa.Context) => {
  try {
    const productId = ctx.params.productId;
    const product = await getProductById(productId);
    ctx.response.body = product;
  } catch (err) {
    console.error(err);

    if (err instanceof mongoose.Error.CastError) {
      ctx.throw(400, 'Invalid payload, must be valid Object Id');
    } else {
      ctx.throw(422, 'Request unprocessed');
    }
  }
});

export default router.routes();
