import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Posts from '../movies/Posts';

class MovieSearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            items: [],
        }
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.search(this.props.searchTerm);

    }

    componentWillReceiveProps(nextProps) {

        this.search(nextProps.searchTerm);
    }

    search(term) {
        this.setState({ isFetching: true })
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=40c7337963dd284cd2889161ac071f52&query=` + term)
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

export default MovieSearchApp;
