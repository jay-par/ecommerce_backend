import * as Koa from 'koa';
import * as Router from 'koa-router';
import { getProducts } from './apis/mongo';

const app = new Koa();
const router = new Router();

router.get('/*', async ctx => {
  getProducts();
  ctx.body = 'Hey TS World!';
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
