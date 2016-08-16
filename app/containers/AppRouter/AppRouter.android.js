/**
 * Created by Elf on 11.06.2016.
 */
import React, { Component } from 'react';
import { Dimensions,
    Image } from 'react-native';
import { Router, Scene, Reducer, Modal } from 'react-native-router-flux';

import MainPage from './../nav/MainPage';
import AddBlinPage from './../nav/AddBlinPage';
import Drawer from './../../components/MainMenu/android/NavigationDrawer';

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
        backgroundColor: '#3f51b5',
    };

    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : Dimensions.get('window').height * 10 / 100;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }

    return style;
};

const titleStyle = {
    fontSize: Dimensions.get('window').width * 8 / 100,
    color: 'white',
    marginTop: 5,
}

const navBarStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303f9f',
    height: Dimensions.get('window').height * 10 / 100,
}

const leftButtonStyle = {
    top: Dimensions.get('window').height * 2 / 100,
    left: 20,
}

export default class App extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="modal" component={Modal}>
                    <Scene
                        key="root"
                        titleStyle={titleStyle}
                        navigationBarStyle={navBarStyle}
                        leftButtonStyle={leftButtonStyle}>

                        <Scene
                            key="drawer"
                            component={Drawer}>

                            <Scene key="content">
                                <Scene
                                    key="main"
                                    component={MainPage}
                                    title="Blin"
                                    initial={true}/>

                                <Scene
                                    key="addBlin"
                                    component={AddBlinPage}
                                    title="Add Blin"/>
                            </Scene>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
