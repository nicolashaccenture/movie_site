import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/movieDetailPage.css';
import styleable from 'react-styleable';
import fetch from 'isomorphic-fetch';



@styleable(css)
class MovieDetailPage extends React.Component {

  static get propTypes() {
    return {
      css: PropTypes.object.isRequired,
      location: PropTypes.any,
    };
  }

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      albumCover: "",
      albumTitle: "",
      albumArtist: "",
      albumURI: ""
    };
  }

  /*  getStyle(){
      return {
        backgroundImage: 'https://image.tmdb.org/t/p/original/' + this.props.location.state.backdrop_path
      }
    }
  */
  componentDidMount() {
    this.search(this.props.location.state.post.original_title);
  }

  search(searchString) {
    let url = "https://api.spotify.com/v1/search?q=\"" + searchString + "\"&type=album";
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          albumCover: data.albums.items[0].images[1].url,
          albumTitle: data.albums.items[0].name,
          albumArtist: data.albums.items[0].artists[0].name,
          albumURI: data.albums.items[0].uri
        });
        //     debugger;
      });
  }

  render() {
    let style = this.props.css;
    let coverImage = {
      backgroundImage: "url(" + "https://image.tmdb.org/t/p/original" + this.props.location.state.post.backdrop_path + ")",      
    };
   // debugger;
    return (

     <div className={this.props.css.coverImage + ' ' + this.props.css.root} style={coverImage} >
        <div className={"container-fluid " + style.containerFluid}>
          <div className={"row " + this.props.css.rowEqHeight}>
            <div className="col-md-3">
              <img className={"img-responsive " + this.props.css.detailPoster} src={"https://image.tmdb.org/t/p/w640" + this.props.location.state.post.poster_path} alt="" />
            </div>
            <div className="col-md-9">
              <div className={"panel panel-default " + this.props.css.moviePanel}>
                <div className={"panel-heading " + this.props.css.panelHeading}>{this.props.location.state.post.original_title}</div>
                <div className="panel-body">
                  <div className="row">
                    <div className={"col-md-6 " + style.column}>
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
                    <div className="col-md-6">
                      <img className={"img-responsive " + this.props.css.albumCover} src={this.state.albumCover} alt="Fate Album Cover" />
                      <p>{this.state.albumTitle}</p>
                      <p>{this.state.albumArtist}</p>
                      <iframe src={"https://open.spotify.com/embed?uri=" + this.state.albumURI} width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
                    </div>
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

export default MovieDetailPage;
