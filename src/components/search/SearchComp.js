import React from 'react';
import css from '../../styles/homePage.css';
import styleable from 'react-styleable';
import PropTypes from 'prop-types';
import Fetch from 'react-fetch';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';


class SearchComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

  }

/*render() {
    return (
        <form className="navbar-form navbar-left">
              <div className="form-group">
                 <input type="text" className="form-control" placeholder="Search" value={this.state.inputValue} onChange={this.updateInputValue}/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
  }
*/

render() {
    return (
      <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
        </div>
        {/*<input type="submit" value="Submit" />*/}
        <Link to={{pathname: '/app/movies/search', state: { value: this.state.value }}}>
            <button type="submit" className="btn btn-default">Submit</button>
        </Link>
      </form>
    );
  }


}

export default SearchComp;
