import TabList from '../components/TabList';
import login from './loginpage'
import TabRoute from '../components/tabRoute';
import ClassDetail from '../components/classDetail';
import addClass from '../components/class-q/addClass-q'
import allClass from '../components/class-q/allClass-q'
import checkPaper from '../components/checkPaper/index'
import createExaxm from '../components/createexam/createExaxm1'
const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/list',
        component: TabList,
        children:[
            {
                path: '/list/add',
                component: TabRoute
            },
            {
                path: '/list/type',
                component: TabRoute
            },
            {
                path: '/list/look',
                component: checkPaper
            },
            {
                path: '/list/exam',
                component: createExaxm
            },
            {
                path: '/list/grade',
                component: TabRoute
            },
            {
                path: '/list/classdetail',
                component: ClassDetail
            },
            {
                path: '/list/addclass',
                component: addClass
            },
            {
                path: '/list/allclass',
                component: allClass
            }
        ]
    }
]

export default routes;