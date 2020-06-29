import * as React from 'react'
import { BrowserRouter as Router, NavLink, Switch, Redirect, Route, Link } from 'react-router-dom';
import RouteWithSubRoutes from '../../router/authority'

interface Props {
    routes?: any
    pathname?: string
    [propName: string]: any;
  }
class Layout extends React.Component<Props, {}> {
    render() {
        console.log(this.props)
        return (
            <div>
                <div>正在展示的组件：{this.props.location.pathname}</div>
                <Switch>
                    {this.props.routes.map((route: any, i: number) => <RouteWithSubRoutes key={i} {...route} />)}
                </Switch>
            </div>
        )
    }
}
export default Layout
