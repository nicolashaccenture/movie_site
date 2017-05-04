import React from 'react';
import PropTypes from 'prop-types';

import css from '../../styles/movieGrid.css';
import styleable from 'react-styleable';
import { Link } from 'react-router-dom';


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
     // imgUrl: ''
    };
 }

/*componentDidMount(){
this.state.imgUrl = this.state.baseUrl + this.props.posts.poster_path;
}*/

/*getUrl(){
    this.state.imgUrl = this.state.baseUrl + post.poster_path;
};*/


/*onError() {
  this.setState({
    "baseUrl": "../images/album",


  })
}*/


//imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + post.poster_path;

    render() {
    //    getUrl();
        return (
            <div className={this.props.css.root}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<h1 className="page-header">Most Popular Movies</h1>*/}
                                </div>
                                    {this.props.posts.map((post, i) =>
                                    <div key={i}>
                                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                            <Link className="thumbnail" to={{pathname: '/app/movies/details', state: { post: post }}}>
                                                {/*<img className="img-responsive" src={this.state.imgUrl} alt='no pic' />*/}
                                               {/*<img onError={this.onError.bind(this)} className="img-responsive" src={this.state.baseUrl + post.poster_path} alt='no pic' />*/}
                                                <img className="img-responsive" src={this.state.baseUrl + post.poster_path} alt="no pic" />
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

                                            /*<a className="thumbnail" href="#">
                                                <img className="img-responsive" src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + post.poster_path} alt />
                                                <div className={this.props.css.movieTitle}>{post.title}</div>
                                            </a>*/
//<Link className="thumbnail" to="/app/movies/details" to={{pathname: '/app/movies/details', state: { post: post }
export default Posts;
