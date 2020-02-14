import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux'
import * as serviceWorker from './serviceWorker';
import { Provider }from 'react-redux'
import reducer from './reducers'
import EventsIndex from './components/events_index'
import EventsNew from './components/events_new'
import EventsShow from './components/events_show'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch }from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension' 

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(<MuiThemeProvider><Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route path="/events/new" component={EventsNew} />
            <Route path="/events/:id" component={EventsShow} />
             <Route path="/" component={EventsIndex} />
             <Route path="/events" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
        </Provider>
        </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
