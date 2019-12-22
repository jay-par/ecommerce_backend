import * as Koa from 'koa';
import '../utils/env';

export const apikeyMiddleware = async (ctx: Koa.Context, next: any) => {
  const apikey: String = ctx.request.headers['x-api-key'];
  if (apikey === process.env.APIKEY) {
    await next();
  } else {
    ctx.throw(401, 'Unauthorized');
  }
};
