
import React from 'react';
import {HashRouter, Route, Router, Switch} from 'react-router-dom';
import Home from "../page/home/index"; //引入的组件
import About from "../page/about/index";//引入的组件
import Inbox from "../page/Inbox/index";//引入的组件

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {/*//定义路由地址*/}
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={About}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;