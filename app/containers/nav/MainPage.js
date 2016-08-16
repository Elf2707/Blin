/**
 * Created by Elf on 12.06.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as BlinsActions from './../../actions/BlinsActions';
import BlinsList from './../../components/BlinsList';

class MainView extends Component {
    constructor(props) {
        super(props);

        this.props.fetchBlins();
    }

    render() {
        return (
            <View>
                <BlinsList blins={this.props.blins} />
            </View>
        );
    }

    // Object width from percents of screen width
    getWidthByPerc(percents) {
        return percents * Dimensions.get('window').width / 100;
    }

    // Object width from percents of screen width
    getHeightInPerc(percents) {
        return percents * Dimensions.get('window').height / 100;
    }
}

const mapStateToProps = (state) => {
    console.log('ssssssssssssssssssssssssssssssss1')
    console.log(state);
    console.log('ssssssssssssssssssssssssssssssss2')
    return {
        blins: state.blinsReducer.blins,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(BlinsActions, dispatch);
}

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainView);

export default MainPage;
