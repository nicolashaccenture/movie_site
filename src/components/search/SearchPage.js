import React from 'react';
import PropTypes from 'prop-types';

import css from '../../styles/homePage.css';
import styleable from 'react-styleable';

import MovieSearchApp from './MovieSearchApp.js';

@styleable(css)
class SearchPage extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired,
        location: PropTypes.any,
    };
  }

  render() {
    return(
      <div className={this.props.css.root}>
        <h1 className="page-header">Search Results for: {this.props.location.state.value} </h1>
        <MovieSearchApp searchTerm = {this.props.location.state.value}/>
      </div>
    );

  }
}

export default SearchPage;
