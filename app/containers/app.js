/**
 * Created by Elf on 27.07.2016.
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import NavigationRoot from './nav/NavigationRoot';
import reducer from './../reducers';
import * as categorySaga from './../sagas/categoriesSagas';
import * as talksSaga from './../sagas/talksSagas';

// Note: this API requires redux@>=3.1.0
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(talksSaga.startWatchTalks);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationRoot />
            </Provider>
        );
    }
}
