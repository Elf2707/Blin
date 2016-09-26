/**
 * Created by Elf on 11.06.2016.
 */
import React, { Component } from 'react';
import { Router, Scene, Reducer } from 'react-native-router-flux';

import MainPage from './MainPage';
import AddBlinPage from './AddBlinPage';
import DimensionUtils from './../../utils/dimentionUtils';

const reducerCreate = params => {
    const defaultReducer = Reducer(params); // eslint-disable-line new-cap
    return (state, action) => defaultReducer(state, action);
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (props, computedProps) { // eslint-disable-line no-unused-vars
    const style = {
        flex: 1,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        backgroundColor: '#4AABF7',
    };

    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : DimensionUtils.getHeightDimInPerc(11);
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

const titleStyle = {
    fontSize: DimensionUtils.getHeightDimInPerc(5),
    fontFamily: 'animated',
    color: 'white',
    borderWidth: 2,
    borderColor: 'green',
    marginTop: DimensionUtils.getHeightDimInPerc(3.8),
};

const navBarStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4AABF7',
    height: DimensionUtils.getHeightDimInPerc(11),
    borderWidth: 2,
    borderColor: 'cyan',
    borderBottomColor: '#4AABF7',
};

const leftButtonStyle = {
    top: 0,
    left: 20,
};

export default class App extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}>
                <Scene
                    key="root"
                    navigationBarStyle={navBarStyle}
                    leftButtonStyle={leftButtonStyle}>

                    <Scene
                        key="main"
                        component={MainPage}
                        title="Talks Around"
                        initial={true}
                        titleStyle={titleStyle}
                        hideTabBar={true}
                        hideNavBar={false} />

                    <Scene
                        key="addBlin"
                        component={AddBlinPage}
                        title="Add Blin"
                        titleStyle={titleStyle} />
                </Scene>
            </Router>
        );
    }
}
