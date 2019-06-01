import React, {Component} from 'react';
import './App.css';
import Main from './containers/Main/Main'
import {  Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import NotFoundRoute from './components/NotFoundRoute/NotFoundRoute'

class App extends Component {
  render () {
    return (
      <div>
        <Layout> 
          <Switch>
            <Route exact path = "/" component = {Main} />
            <Route component = {NotFoundRoute} />
          </Switch>
        </Layout>
      </div>
    );
  }

}
export default App;
