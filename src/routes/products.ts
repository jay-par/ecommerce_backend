import * as Koa from 'koa';
import { getProducts } from '../apis/mongo';

export const getProductsRoute = async (ctx: Koa.Context) => {
  ctx.response.body = { Response: 'Hello' };
};
