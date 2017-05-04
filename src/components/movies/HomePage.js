import React from 'react';
import css from '../../styles/homePage.css';
import styleable from 'react-styleable';
import PropTypes from 'prop-types';
import Fetch from 'react-fetch';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import MovieGridApp from './MovieGridApp.js';

const store = configureStore();

@styleable(css)

class HomePage extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired
    };
  }

  render() {
    return(
      <div className={this.props.css.root}>
        <h1 className="page-header">Most Popular Movies</h1>
        <MovieGridApp />
      </div>
    );

  }
}

export default HomePage;
