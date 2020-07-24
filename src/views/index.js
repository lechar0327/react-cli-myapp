import loadable from '@loadable/component';
// 动态加载
const Home = loadable(() => import('./home/Home'));
const Menu = loadable(() => import('./menu/Menu'));
const Todo = loadable(() => import('./todo/Todo'));
const Good = loadable(() => import('./good/Good'));
export default {
    Home,
    Menu,
    Good,
    Todo
}