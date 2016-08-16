/**
 * Created by Elf on 27.07.2016.
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppRouter from './AppRouter/AppRouter';
import reducer from './../reducers';
import FirebaseMgr from './../database/FirebaseMgr';

// Note: this API requires redux@>=3.1.0
const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }

    componentWillMount() {
        // Listening for auth state changes.
        // [START authstatelistener]
        FirebaseMgr.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                console.log(user)
                let isAnonymous = user.isAnonymous;
                let uid = user.uid;
            }
        });

        FirebaseMgr.auth().signInAnonymously().catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/operation-not-allowed') {
                console.error(`Anonymous auth in the Firebase not enabled. ${errorMessage}`);
            } else {
                console.error(error + errorMessage);
            }
        });
    }

    componentWillUnmount() {
        FirebaseMgr.auth().signOut();
    }
}
