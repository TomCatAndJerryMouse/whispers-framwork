// const components = require.context('./',true,/index.js$/)
// function find(str,cha,num){
//     var x=str.indexOf(cha);
//     for(var i=0;i<num;i++){
//         x=str.indexOf(cha,x+1);
//     }
//     return x;
// }
// let arr = new Array();
// let objs = {}
// components.keys().map((key)=>{
//     const name = key.substring(find(key,'/',0) + 1,find(key,'/',1));
//     objs[name] = components(key).default;
// })
// console.log(arr);
// function name() {
//     console.log("sssss" + arr);
//     let ss={}
//     for (var i=0;i<arr.length;i++){

//     }
//     arr.map((c)=>{
//         console.log(c.key);
//         ss[c.key]=c;
//     })
//     return ss;
// }
import Body from "./Body/index";
//import Button from "./Button/index";
import Column from "./Column/index";
import Container from "./Container/index";
import Footer from "./Footer/index";
import Button from "./Form/Button/index";
import Framwork from "./Framwork/index";
import Header from "./Header/index";
import Layout from "./Layout/index";
import Menu from "./Menu/index";
import RouteLoader from "./RouteLoader/index";
import Row from "./Row/index";
import Sider from "./Sider/index";
import * as LocaleProvider from "./LocaleProvider/index";
export {
    Body,
    Column,
    Container,
    Footer,
    Button,
    Framwork,
    Header,
    Layout,
    Menu,
    RouteLoader,
    Row,
    Sider,
    LocaleProvider,
};