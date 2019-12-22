import * as Koa from 'koa';
import { getProducts, getProductById } from '../apis/mongo';

const getProductsRoute = async (ctx: Koa.Context) => {
  ctx.response.body = await getProducts();
};

const getProductByIdRoute = async (ctx: Koa.Context) => {
  const productId = ctx.params.productId;
  const product = await getProductById(productId);
  ctx.response.body = product;
};

export const productRoutes = {
  getProductsRoute,
  getProductByIdRoute
};
