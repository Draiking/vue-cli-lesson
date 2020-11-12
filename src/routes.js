import VueRouter from 'vue-router';
import Home from './components/Home';
import Car from './components/Car';
import CarFull from './components/CarFull';
import ErrorComponent from './components/Error';




const Cars = resolve => {
    require.ensure(['./components/Cars.vue'], () => {
        resolve(
            require('./components/Cars.vue')
        )
    })
}


export default new VueRouter({
    routes: [{
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars,
            name: 'Cars'
        },
        {
            path: '/car/:id',
            component: Car,
            children: [{
                path: 'full',
                component: CarFull,
                name: 'carFull',
                beforeEnter(to, fromR, next) {
                    next()
                }
            }]
        },
        {
            path: '/none',
            redirect: {
                name: 'Cars'
            }
        },
        {
            path: '*',
            component: ErrorComponent
        }
    ],
    mode: 'history',
    scrollBehavior(to) {

        if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return {
                x: 0,
                y: 0,
            }
        }
    }
})