import * as Koa from 'koa';

export const apikey = async (ctx: Koa.Context, next: any) => {
  const apikey: String = ctx.request.headers['x-api-key'];
  console.log(`Validating apikey: ${apikey}`);
  if (apikey === 'YES') {
    await next();
  } else {
    ctx.throw(401, 'Unauthorized');
  }
};
