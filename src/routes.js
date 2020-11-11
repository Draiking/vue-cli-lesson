import VueRouter from 'vue-router';
import Home from './components/Home';
import Cars from './components/Cars';
import Car from './components/Car';
import CarFull from './components/CarFull';
import ErrorComponent from './components/Error';

export default new VueRouter({
    routes: [
        {
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
            children: [
            {
                path: 'full',
                component: CarFull,
                name: 'carFull'
            }
            ]
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
            return {selector: to.hash}
        } else {
            return {
                x: 0,
                y: 0,
            }
        }
    }
})