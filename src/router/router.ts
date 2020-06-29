import Home from "../page/home/index"; //引入的组件
import Layout from "../page/Layout/index"; //引入的组件
import About from "../page/about/index";//引入的组件
import Inbox from "../page/Inbox/index";//引入的组件
import list from "../page/list/index";//引入的组件


const Routes = [
//   { path: "/", name: "home", component: Home, auth: true },
  { path: "/layout", name: "Home", component: Layout,auth: true,
    routes: [
      {
        path: "/layout/About", 
        name: "About", 
        component: About,
        auth: true
      },
      {
        path: "/layout/Inbox", 
        name: "Inbox", 
        component: Inbox,
        auth: true
      }
    
    ]
 },
  { 
    path: "/list", 
    name: "list", 
    component: list,
    auth: true
  },
  { path: "/", name: "/", component: Home, },
//   { path: "*", name: "indexedDB", component: Undefined }
]
export default Routes;