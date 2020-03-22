export default [
    {
        auth: true,
        path: "/home",
        component: require("../../bussiness/home/index").default,
        exact :false,
        defaultPage:true,
    },
    {
        auth: true,
        path: "/home1",
        component: require("../../bussiness/home1/index").default,
        exact :false,
    }
]