import React from 'react';
import css from '../../styles/header.css';
import styleable from 'react-styleable';
import PropTypes from 'prop-types';
import Fetch from 'react-fetch';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

@styleable(css)

class SearchComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

  }



  render() {
    let searchUrl = '/app/movies/search/' + this.state.value;
    return (
      <form className={this.props.css.navcenter} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
        </div>
        <Link to={{ pathname: searchUrl, state: { value: this.state.value } }}>
          <button className={this.props.css.transpButton}>Submit</button>
        </Link>
      </form>
    );
  }


}

export default SearchComp;
