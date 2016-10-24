import path from 'path'
import Koa from 'koa'
import router from './router'
import render from 'koa-ejs'
import co from 'co'

const app = new Koa()

render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'html',
  cache: false,
  debug: true
})

app.context.render = co.wrap(app.context.render)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => console.log('server started 4000'))

export default app

