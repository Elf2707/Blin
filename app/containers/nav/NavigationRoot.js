/**
 * Created by Elf on 11.06.2016.
 */
import React, { Component } from 'react';
import { Actions, Router, Scene, Reducer, TabBar, Modal } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainPage from './MainPage';
import AddTalkPage from './AddTalkPage';
import ChooseLocation from './../ChooseLocation';
import TabView from './../../components/TabView';
import DimensionUtils from './../../utils/dimentionUtils';

const reducerCreate = params => {
    const defaultReducer = Reducer(params); // eslint-disable-line new-cap
    return (state, action) => defaultReducer(state, action);
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (props, computedProps) { // eslint-disable-line no-unused-vars
    const style = {
        flex: 1,
        shadowColor: 'red',
        shadowOffset: null,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backgroundColor: '#E6EAED',
    };

    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : DimensionUtils.getHeightDimInPerc(12);
        style.marginBottom = computedProps.hideTabBar ? 0 : DimensionUtils.getHeightDimInPerc(8);
    }
    return style;
};

const titleStyle = {
    fontSize: DimensionUtils.getHeightDimInPerc(5),
    fontFamily: 'animated',
    color: '#FFF',
    marginTop: DimensionUtils.getHeightDimInPerc(4.2),
};

const navBarStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4AABF7',
    height: DimensionUtils.getHeightDimInPerc(12),
    borderBottomColor: '#4AABF7',
};

const tabBarStyle = {
    // borderTopColor: '#4AABF7',
    // borderTopWidth: 1,
    backgroundColor: '#4AABF7',
    height: DimensionUtils.getHeightDimInPerc(8),
};

const leftButtonStyle = {
    marginTop: DimensionUtils.getHeightDimInPerc(3),
};

const leftButtonIcon = () => {
    return (
    <Icon name={'chevron-left'}
          size={DimensionUtils.getHeightDimInPerc(4.5)}
          color='#FFF' />
    );
};

const getTabBarIcon = (iconName) => {
    return class extends Component {
        render() {
            return <Icon name={iconName}
                         size={DimensionUtils.getHeightDimInPerc(5.5)}
                         color={this.props.selected ? '#FF5722' :'#FFF'}/>;
        }
    };
};

export default class App extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}>
                <Scene key="root"
                       tabs={true}
                       tabBarStyle={tabBarStyle}>

                    <Scene key="main"
                           component={MainPage}
                           title="Talks Around"
                           initial={true}
                           titleStyle={titleStyle}
                           navigationBarStyle={navBarStyle}
                           hideTabBar={false}
                           hideNavBar={false}/>

                    <Scene key="locationsTab"
                           component={ChooseLocation}
                           title="Locations"
                           icon={getTabBarIcon('place')}
                           onLeft={()=> Actions.main()}
                           hideTabBar={true}
                           titleStyle={titleStyle}
                           navigationBarStyle={navBarStyle}
                           leftTitle={leftButtonIcon()}
                           leftButtonStyle={leftButtonStyle}/>

                    <Scene key="tab4"
                           component={TabView}
                           icon={getTabBarIcon('filter-list')}
                           title="Tab #4"/>

                    <Scene key="tab5"
                           component={TabView}
                           icon={getTabBarIcon('near-me')}
                           title="Tab #5"/>

                    <Scene key="tab6"
                           component={TabView}
                           icon={getTabBarIcon('add')}
                           title="Tab #6"/>

                    <Scene key="tab7"
                           component={TabView}
                           icon={getTabBarIcon('settings')}
                           title="Tab #7"/>
                </Scene>
            </Router>
        );
    }
}
