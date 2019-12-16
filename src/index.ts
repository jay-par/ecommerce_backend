const Koa = require('koa');
const Router = require('koa-router');
const { getProducts } = require('./apis/mongo');

const app = new Koa();
const router = new Router();

router.get('/product', async (ctx: any) => {
  const response = await getProducts();
  ctx.body = response;
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
