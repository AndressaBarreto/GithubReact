import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './pages/result';
import NotFound from './pages/notfound';
import Home from './home';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/result/:id" component={Result}/>
                    <Route path="/notfound" component={NotFound}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);