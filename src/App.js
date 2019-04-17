import React, { Component } from 'react';
import {BrowserRouter, HashRouter, Switch, Router, Route , Link} from 'react-router-dom'
// test1
import Test1 from './view/test1'
// test2
import Test2 from './view/test2/index.js'
class App extends Component {
  render() {
      return (
          <HashRouter>
              <div id='app'>
                <div className="tab">
                  <Link to="/Test1">Test1</Link>
                  <Link to="/Test2">Test2</Link>  
                  </div> 
                  <Switch>                      
                      <Route path="/Test1" component={Test1}/>
                      <Route path="/Test2" component={Test2}/>
                      {/*如果没有path就每个页面都用这个组件，但是用Switch包住就可以上面没匹配到到才走这个路由*/}
                      {/*<Route component={Dashboard}/>*/}
                  </Switch>
                  <p> welcome to home page </p>
              </div>
          </HashRouter>
      )
  }
}
export default App