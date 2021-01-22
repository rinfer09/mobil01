import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact, Home } from '..';

const Index = () => {
	return (
		<Router>
			<Switch>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default Index;
