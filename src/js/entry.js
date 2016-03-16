import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory, IndexRedirect } from 'react-router';
// import Routes from './navigation/Routes';
//components
import Nav from './navigation/Nav';
//views
import Home from './views/home';
import Research from './views/research';
import Publications from './views/publications';
import Members from './views/members';
import Gallery from './views/gallery';

export class App extends React.Component {
    render() {
        return (
        	<div>
        		<Nav />
        		{this.props.children}
        	</div>
        );
    }
}

render((
  <Router history={browserHistory}>
	  <Route path='/' component={App}>
	  	<IndexRedirect to="home" />
	  	<Route path='home' name="Home" component={Home} />
	  	<Route path='research' name="Research" component={Research} />
	  	<Route path="publications" name="Publications" component={Publications} />
	  	<Route path="members" name="Members" component={Members} />
	  	<Route path="gallery" name="Gallery" component={Gallery} />
	  </Route>
  </Router>
),document.getElementById('app'));