import Home from '.././pages/Home';
import Browse from '.././pages/Browse';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/browse', component: Browse },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }