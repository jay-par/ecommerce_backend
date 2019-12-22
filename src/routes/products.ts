import * as Koa from 'koa';
import * as mongoose from 'mongoose';
import { getProducts, getProductById } from '../apis/mongo';

const getProductsRoute = async (ctx: Koa.Context) => {
  ctx.response.body = await getProducts();
};

const getProductByIdRoute = async (ctx: Koa.Context) => {
  try {
    const productId = ctx.params.productId;
    const product = await getProductById(productId);
    ctx.response.body = product;
  } catch (e) {
    ctx.throw(422, 'Invalid payload');
  }
};

export const productRoutes = {
  getProductsRoute,
  getProductByIdRoute
};
