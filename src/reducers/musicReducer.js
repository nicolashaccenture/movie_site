import * as types from '../actions/actionTypes';

// export function searchMusic(state = 'reactjs', action) {
//     switch (action.type) {
//         case SELECT_SUBREDDIT:
//             return action.subreddit;
//         default:
//             return state;
//     }
// }

function albums(state = {
  isFetching: false,
  didInvalidate: false,
  album: []
}, action) {
  switch (action.type) {
    case types.REQUEST_MUSIC:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case types.RECEIVE_MUSIC:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        albums: action.albums,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export function musicByAlbum(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_MUSIC:
    case types.REQUEST_MUSIC:
      return Object.assign({}, state, {
        [action.searchString]: albums(state[action.searchString], action)
      });
    default:
      return state;
  }
}
//
// const rootReducer = combineReducers({
//     postsBySubreddit,
//     selectedSubreddit
// })
//
// export default rootReducer
