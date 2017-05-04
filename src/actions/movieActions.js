import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    };
}

function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    };

}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.results.map(child => child),
        receivedAt: Date.now()

    };

}

function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=40c7337963dd284cd2889161ac071f52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    };

}

function searchMovies(subreddit,searchTerm) {
    return dispatch => {
        dispatch(requestPosts(subreddit));
     //   let key = 'jack';
     //  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=40c7337963dd284cd2889161ac071f52&query=` + key)
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=40c7337963dd284cd2889161ac071f52&query=` + searchTerm)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    };

}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit));
        }
    };
}

export function fetchMoviesIfNeeded(subreddit,searchTerm) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(searchMovies(subreddit,searchTerm));
        }
    };
}
