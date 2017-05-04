import React from 'react';
import PropTypes from 'prop-types';

import {
  //BrowserRouter as Router,
  Route,
  Redirect,
  //Link,
  Switch
} from 'react-router-dom';

// import Header from './common/Header';
 import HomePage from './HomePage';
// import SettingsPage from './settings/SettingsPage';
// import CoursesPage from './course/CoursesPage';
// import AboutPage from './about/AboutPage';
 import MovieDetailPage from './MovieDetailPage';
 import SearchPage from '../search/SearchPage';

class MovieHandler extends React.Component {

    static get propTypes() {
      return {
          match: PropTypes.any,
      };
    }

  constructor(props) {
    super(props);
   // this.getComponent = this.getComponent.bind(this);
  }

//   getComponent(){
//     switch (this.props.match.url) {
//         case '/movies':
//             return <HomePage />;
//             break;
//         case '/courses':
//             return <CoursesPage />;
//             break;
//         case '/settings':
//             return <SettingsPage />;
//             break;
//         case '/about':
//             return <MovieDetailPage />;
//             break;
//         default:
//             return <HomePage />;
//             break;
//     }
//   }


    render() {
        return (
            <Switch>
                <Redirect exact path={this.props.match.url} to={this.props.match.url+"/home"}/>
                <Route path={this.props.match.url+"/home"} component={HomePage}/>
                <Route path={this.props.match.url+"/details"} component={MovieDetailPage}/>
                <Route path={this.props.match.url+"/search"} component={SearchPage}/>

            </Switch>
        );
    }

}

export default MovieHandler;
