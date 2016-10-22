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

app.listen(3001, () => console.log('server started 3001'))

export default app

