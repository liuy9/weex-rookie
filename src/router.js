import Router from 'vue-router'
import Main from '@/components/tab/Main'

Vue.use(Router)

module.exports = new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        }
    ]
})
