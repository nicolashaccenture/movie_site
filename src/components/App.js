import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AuthenticationPage from './landing/AuthenticationPage';
import PageHandler from './PageHandler';
import createHistory from 'history/createBrowserHistory'

var ReactGA = require('react-ga');
ReactGA.initialize('UA-98497486-1');

import { connect } from 'react-redux';

import {
  firebaseConnect,
  pathToJS,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';

@firebaseConnect()
@connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    account: pathToJS(firebase, 'profile')
  })
)
class App extends React.Component {

  constructor(props) {
    super(props);
    this.protectedPageHandler = this.protectedPageHandler.bind(this);
    this.initialRoute = this.initialRoute.bind(this);
    //this.facebookLogin = this.facebookLogin.bind(this);
  }
  initialRoute() {

    //  console.log(true);
    //  debugger;
      if (true){

        return <Redirect to="/app"/>;
      }else{
        // console.log(this.props.auth);
        return <Redirect to="/login"/>;
      }
  }

  pageDoesNotExist() {
    return (
        <div>PAGE DOES NOT EXIST</div>
    );
  }

  protectedPageHandler() {
  //  console.log(true);
    if (1){

      return <Route component={PageHandler}/>;
    }else{

      return <Redirect to="/login"/>;
    }
  }

  render() {
    const history = createHistory()
    history.listen((location, action) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={this.initialRoute}/>
          <Route path="/login" component={AuthenticationPage}/>
          <Route path="/app" render={this.protectedPageHandler}/>
          {/*<Route path="/app" component={PageHandler}/>*/}
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
