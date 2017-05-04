import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
//import { selectSubreddit, fetchMoviesIfNeeded, invalidateSubreddit } from '../../actions/movieActions';
import Posts from '../movies/Posts';

class MovieGridApp extends React.Component {
 
constructor(props) {
    super(props);
    this.state = {
        isFetching: false,
        items: [],
    }
    
}

componentDidMount() {
 
  this.setState({ isFetching: true })
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=40c7337963dd284cd2889161ac071f52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(response => response.json())
    .then(json => {
      this.setState({ isFetching: false, items: json.results })
    })
}

render() {
        const { isFetching, items } = this.state
  if (isFetching) { return <p>Loading... </p> }
        return (
            <div>
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={items} />
                </div>                
            </div>
        );
}

}

export default MovieGridApp;
