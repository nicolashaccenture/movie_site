import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';

function requestAlbums(searchString) {
  return {
    type: types.REQUEST_MUSIC,
    searchString
  };
}

function receiveAlbums(searchString, json) {
  return {
    type: types.RECEIVE_MUSIC,
    searchString,
    album: json.albums.items[0],
    receivedAt: Date.now()
  };
}

function fetchAlbums(searchString) {
  let url = "https://api.spotify.com/v1/search?q=\"" + searchString + "\"&type=album";
  return dispatch => {
    dispatch(requestAlbums(searchString));
    return fetch(
      //"https://api.themoviedb.org/3/discover/movie?api_key=40c7337963dd284cd2889161ac071f52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        url
      )
      .then(response => response.json())
      .then(json => dispatch(receiveAlbums(searchString, json)));
  };
}

function shouldFetchMusic(state, searchString) {
  const albums = state.musicByAlbum[searchString];
  if (!albums) {
    return true;
  } else if (albums.isFetching) {
    return false;
  } else {
    return albums.didInvalidate;
  }
}

export function fetchAlbumsIfNeeded(searchString) {
  return (dispatch, getState) => {
    if (shouldFetchMusic(getState(), searchString)) {
      return dispatch(fetchAlbums(searchString));
    }
  };
}
