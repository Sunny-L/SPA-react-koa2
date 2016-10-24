const router = require('koa-router')()

router.get('/', async(ctx, next) => {
    await ctx.render('index')
})

router.get('/api/post', (ctx, next) => {
    ctx.body =  {
        code: 0,
        info: {
            posts: [{
                title: 'hello world 1~'
            }, {
                title: 'hello world 2~'
            }, {
                title: 'hello world 3~'
            }, {
                title: 'hello world 4~'
            }, ]
        }
    }
})

export default router