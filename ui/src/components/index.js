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
import Body from "./Layout/Body/index";
import Column from "./Layout/Column/index";
import Container from "./Layout/Container/index";
import Footer from "./Layout/Footer/index";
import Button from "./General/Form/Button/index";
import Input from "./DataEntry/Input/index";
import Header from "./Layout/Header/index";
import Layout from "./Layout/index";
import Menu from "./Navigation/Menu/index";
import RouteLoader from "./RouteLoader/index";
import Row from "./Layout/Row/index";
import Sider from "./Layout/Sider/index";
import * as LocaleProvider from "./LocaleProvider/index";
export {
    Body,
    Column,
    Container,
    Footer,
    Button,
    Input,
    Header,
    Layout,
    Menu,
    RouteLoader,
    Row,
    Sider,
    LocaleProvider,
};