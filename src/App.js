import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

const App = () => {
    return (
        <div className="app">
			<Router>
				<Switch>
					<Route path="/search">
						<h1>Google Clone Search</h1>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
        </div>
    );
}

export default App;
