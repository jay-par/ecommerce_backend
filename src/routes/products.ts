import * as Koa from 'koa';
import { getProducts } from '../apis/mongo';

const getProductsRoute = async (ctx: Koa.Context) => {
  ctx.response.body = await getProducts();
};

const getProductByIdRoute = async (ctx: Koa.Context) => {
  const productId = ctx.params.productId;
  ctx.response.body = { productId };
};

export const productRoutes = {
  getProductsRoute,
  getProductByIdRoute
};
