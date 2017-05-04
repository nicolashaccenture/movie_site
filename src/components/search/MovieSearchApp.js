import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectSubreddit, fetchMoviesIfNeeded, invalidateSubreddit } from '../../actions/movieActions';
import Posts from '../movies/Posts';

class MovieSearchApp extends React.Component {
  static get propTypes() {
    return {
      selectedSubreddit: PropTypes.string.isRequired,
      posts: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
      lastUpdated: PropTypes.number,
      dispatch: PropTypes.func.isRequired,
      searchTypes: PropTypes.any,
      searchTerm: PropTypes.string
    };
  }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(fetchMoviesIfNeeded(selectedSubreddit,this.props.searchTerm));
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props;
            dispatch(fetchMoviesIfNeeded(selectedSubreddit,this.props.searchTerm));
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit));
        this.props.dispatch(fetchMoviesIfNeeded(nextSubreddit));
    }

    handleRefreshClick(e) {
        e.preventDefault();

        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchMoviesIfNeeded(selectedSubreddit));
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
        return (
            <div>
                {isFetching && posts.length === 0 &&
                <h2>Loading...</h2>
                }
                {!isFetching && posts.length === 0 &&
                <h2>Empty.</h2>
                }
                {posts.length > 0 &&
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts} />
                </div>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    };
}

export default connect(mapStateToProps)(MovieSearchApp);
