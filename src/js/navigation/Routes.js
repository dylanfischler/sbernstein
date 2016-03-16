import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import { App } from '../entry';

export default () => {
	return
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    	</Route>
 	</Router>;
}
 