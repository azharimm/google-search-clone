import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/search">
						<Search />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
