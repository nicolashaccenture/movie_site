import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import css from '../../styles/movieDetailPage.css';
import styleable from 'react-styleable';

import { fetchAlbumsIfNeeded } from '../../actions/musicActions';

@styleable(css)
class MovieDetailPage extends React.Component {
  static get propTypes() {
    return {
        css: PropTypes.object.isRequired,
        location: PropTypes.any,
        album: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAlbumsIfNeeded("Abba"));
  }

  componentDidUpdate(prevProps) {
    //console.log(this.props.album);
  }

  render(){
    let style = this.props.css;
    return (
      <div>
        <div className={"container-fluid " + style.containerFluid}>
          <div className={"row " + this.props.css.rowEqHeight}>
            <div className="col-md-3">
              <img className="detailPoster img-responsive" src={"https://image.tmdb.org/t/p/w640"+this.props.location.state.post.poster_path} alt=""/>
            </div>
            <div className="col-md-9">
              <div className={"panel panel-default " + this.props.css.moviePanel}>
                <div className="panel-heading">{this.props.location.state.post.original_title}</div>
                <div className="panel-body">
                  <div className="row">
                    <div className={"col-md-6 "+style.column}>
                      <div className="movieProperty">
                        <h4>Overview</h4>
                        <p>{this.props.location.state.post.overview}</p>
                      </div>
                      <div className="movieProperty">
                        <h4>Release Date</h4>
                        <p>{this.props.location.state.post.release_date}</p>
                      </div>
                      <div className="movieProperty">
                        <h4>Rating</h4>
                        <p>{this.props.location.state.post.vote_average}</p>
                      </div>
                    </div>
                    {/*<div className="col-md-6">
                      <img className={"img-responsive "+ this.props.css.albumCover} src={poster} src={album} alt="Fate Album Cover"/>
                      <p>Fate of the Furious: The Album</p>
                      <p>Artists</p>
                      <p>2017</p>
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { musicByAlbum } = state;
    const {
        isFetching,
        lastUpdated,
        album: album
    } = {
        isFetching: true,
        album: []
    };

    return {
        musicByAlbum,
        album,
        isFetching,
        lastUpdated
    };
}

export default connect(mapStateToProps)(MovieDetailPage);
