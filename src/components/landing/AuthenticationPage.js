import React from 'react';
import { connect } from 'react-redux';
//import { UserIsNotAuthenticated } from '../../router'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from '../../styles/authenticationPage.css';
import styleable from 'react-styleable';
import {
  firebaseConnect,
  pathToJS,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';

@styleable(css)
//@UserIsNotAuthenticated // redirect to list page if logged in
@firebaseConnect()
@connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    account: pathToJS(firebase, 'profile')
  })
)
class AuthenticationPage extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired,
        history: PropTypes.any,
        firebase: PropTypes.any
    };
  }

  constructor(props) {
     super(props);
     this.googleLogin = this.googleLogin.bind(this);
     this.facebookLogin = this.facebookLogin.bind(this);
   }

  googleLogin() {
    let myFirstPromise = this.props.firebase.login({
        provider: 'google',
        type: 'popup'
      });
      //console.log(myFirstPromise);
      myFirstPromise.then((authData) => {
        this.props.history.push('/app');
      });
   }

   facebookLogin() {
     let myFirstPromise = this.props.firebase.login({
         provider: 'facebook',
         type: 'popup'
       });
       //console.log(myFirstPromise);
       myFirstPromise.then((authData) => {
         this.props.history.push('/app');
       });
    }

  render() {
    return (
      <div>
        <div className={this.props.css.root}>
          <h1 className={this.props.css.title}>Movies&music</h1>
          <h3>The online database for all things music and movies</h3>
          <div className={this.props.css.buttonsBox}>
            <button
              onClick={this.googleLogin}
              className={this.props.css.loginBtnGoogle + " " + this.props.css.loginBtnGoogle}>
              Google
            </button>
            <button
              onClick={this.facebookLogin}
              className={this.props.css.loginBtn + " " + this.props.css.loginBtnFacebook}>
              Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default AuthenticationPage;
