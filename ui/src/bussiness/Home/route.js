export default [
    {
        auth: true,
        path: "/home/list",
        component: require("./list/index").default,
        exact :false,
        defaultPage:true,
    },
    {
        auth: true,
        path: "/home/setting",
        component: require("./setting/index").default,
        exact :false,
    }
]