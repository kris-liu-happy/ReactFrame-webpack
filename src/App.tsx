import * as React from 'react'
import routeConfig from "./router/index"//引入router.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './router/router'

import RouteWithSubRoutes from './router/authority'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App
