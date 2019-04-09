const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const userRouter = new Router({
    prefix: '/auth'
});

require('./src/routes/user')({ userRouter });
app.use(logger());

router.get('/', async (ctx, next) => {
    ctx.body = await "Hello World!";

})

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});

app.use(bodyParser());
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000);
