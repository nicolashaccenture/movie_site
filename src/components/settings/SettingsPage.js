import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import css from '../../styles/settingsPage.css';
import styleable from 'react-styleable';

import image from '../../images/profile_picture.png';
import {
  firebaseConnect,
  pathToJS,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';


@styleable(css)
@firebaseConnect()
@connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    account: pathToJS(firebase, 'profile')
  })
)
class AboutPage extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired,
        account: PropTypes.any
    };
  }

  render(){
    let img = (this.props.account === undefined) ? image : this.props.account.avatarUrl;
    let name = (this.props.account === undefined) ? "Loading..." : this.props.account.displayName;
    let mail = (this.props.account === undefined) ? "Loading..." : this.props.account.email;

    return (
      <div className={this.props.css.containerBox}>
        <h1 className={this.props.css.title}>User settings</h1>
        <div className="row">
          <div className={this.props.css.centerBox + " col-md-2"}><img className={this.props.css.profilePicture + " img-circle"} src={img}/></div>
          <div className="col-md-10">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{name}</p>
                </div>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{mail}</p>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="languages">Prefered languages</label>
                <select className="form-control" id="languages">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Italian</option>
                  <option>Swedish</option>
                </select>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> Restricted content
                </label>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
