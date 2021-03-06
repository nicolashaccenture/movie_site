import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/movieGrid.css';
import styleable from 'react-styleable';
import { Link } from 'react-router-dom';
import filmFallback from '../../images/filmFallback.png';


@styleable(css)
class Posts extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired,
        location: PropTypes.any,
    };
  }

 constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    };
 }

    render() {
        return (
            <div className={this.props.css.root}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                                </div>
                                    {this.props.posts.map((post, i) =>
                                    <div key={i}>
                                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                            <Link className="thumbnail" to={{pathname: '/app/movies/details', state: { post: post }}}>
                                                <img className="img-responsive" 
                                                src={post.poster_path ? this.state.baseUrl + post.poster_path : filmFallback} 
                                                alt="no pic" />                                                
                                                <div className={this.props.css.movieTitle + ' ' + this.props.css.ellipsis}>{post.title}</div>
                                            </Link>
                                        </div>
                                </div>
                            )}
                     </div>
                 </div>
             </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Posts;
