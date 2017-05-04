import React from 'react';
import PropTypes from 'prop-types';
import {
  //BrowserRouter as Router,
  //Route,
  //Redirect,
  //withRouter,
  Link
} from 'react-router-dom';

import HomePage from '../movies/HomePage';
import SettingsPage from '../settings/SettingsPage';
import SearchComp from '../search/SearchComp';
//import App from '../App';

//import fakeAuth from '../../api/mockAuthentication';

import css from '../../styles/header.css';
import styleable from 'react-styleable';

@styleable(css)
class Header extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired
    };
  }

  // THis should probably be divided into more components
  render () {
    return (
        <nav className={this.props.css.navbar + " navbar"} >
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/app/movies/home">Movies</Link></li>
            </ul>
            {/*<form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>*/}
             <SearchComp/ >
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                   <span className="glyphicon glyphicon-user" aria-hidden="true" />
                   <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="/">Admin dashboard</a></li>
                  <li><Link to="/app/settings">Settings</Link></li>
                  <li role="separator" className="divider" />
                  <li><a href="/">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

/*const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);*/

export default Header;
