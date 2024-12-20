import config from "~/config";


import Home from "~/pages/home";
import Upload from "~/pages/upload";
import Contact from "~/pages/contact";
import Page404 from "~/pages/error/404";
import Thank from "~/pages/thank";


// no need to login
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        // layout: null,
    },

    {
        path: config.routes.upload,
        component: Upload,
        layout: null
    },

    {
        path: config.routes.contact,
        component: Contact,
    },

    {
        path: config.routes.thank,
        component: Thank,
        layout: null
    },

    {
        path: '*',
        component: Page404,
        layout: null
    }
];

// must to login
const privateRoutes = [];

export { publicRoutes, privateRoutes };