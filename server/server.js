const Koa = require('koa')
// const send = require('koa-send')
const path = require('path')
const router = require('koa-router')()
const fs = require('fs')
// const pageRouter = require('./routers/dev-ssr')
// const apiRouter = require('./routers/api')
// const createDb = require('./db/db')
// const config = require('../app.config')

// const db = createDb(config.db.appId, config.db.appKey)

const app = new Koa()
// const router = new Router()

router.get('/test', async (ctx) => {
			// const html = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
			
			// ctx.headers['Content-Type'] = 'text/html'
			// ctx.body = html
			console.log(ctx)
	})

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next)=>{
	try {
		console.log(`request with path ${ctx.path}`)
		await next()
	} catch (err){
		console.log(err)
		ctx.status = 500
		if(isDev){
			ctx.body = err.message
		}
		else{
			ctx.bosy = 'please try again later'
		}
	}
})

// app.use(async (ctx)=>{
	
// })

app
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(async (ctx, next) => {
// 	if(ctx.path === '/favicon.ico'){
// 		await send(ctx, '/favicon.ico', {root: path.join(__dirname, '../')})
// 	}
// 	else{
// 		await next()
// 	}
// })

// app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
// //koa-router
// app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || '3000'

app.listen(PORT, HOST, () => {
	console.log(`server is listening on ${HOST}:${PORT}`)
})