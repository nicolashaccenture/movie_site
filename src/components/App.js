import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AuthenticationPage from './landing/AuthenticationPage';
import PageHandler from './PageHandler';

import fakeAuth from '../api/mockAuthentication';

class App extends React.Component {

  initialRoute() {
      if (fakeAuth.isAuthenticated){
        return <Redirect to="/app"/>;
      }else{
        return <Redirect to="/login"/>;
      }
  }

  pageDoesNotExist() {
    return (
        <div>PAGE DOES NOT EXIST</div>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this.initialRoute}/>
          <Route path="/login" component={AuthenticationPage}/>
          <Route path="/app" component={PageHandler}/>
          <Route render={this.pageDoesNotExist}/>
        </Switch>
      </Router>
    );
  }
  /*render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            fakeAuth.isAuthenticated ? (
              <Redirect to="/movies"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/login" component={AuthenticationPage}/>
          <Route path="/movies" component={PageHandler}/>
          <Route path="/courses" component={PageHandler}/>
          <Route path="/settings" component={PageHandler}/>
          <Route path="/about" component={PageHandler}/>
        </Switch>
      </Router>
    );
  }  */
}

export default App;
