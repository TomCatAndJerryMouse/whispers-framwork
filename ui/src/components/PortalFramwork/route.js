export default [
    {
        auth: true,
        path: "/index",
        component: require("../../portal/index/index").default,
        exact :false,
        defaultPage:true,
    },
    {
        auth: true,
        path: "/product",
        component: require("../../portal/product/index").default,
        exact :false,
    },
    {
        auth: true,
        path: "/news",
        component: require("../../portal/news/index").default,
        exact :false,
    },
    {
        auth: true,
        path: "/about",
        component: require("../../portal/about/index").default,
        exact :false,
    },
    {
        auth: true,
        path: "/contact",
        component: require("../../portal/contact/index").default,
        exact :false,
    }
]