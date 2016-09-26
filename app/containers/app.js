/**
 * Created by Elf on 27.07.2016.
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import NavigationRoot from './nav/NavigationRoot';
import reducer from './../reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationRoot />
            </Provider>
        );
    }
}
