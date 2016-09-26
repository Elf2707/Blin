/**
 * Created by Elf on 12.06.2016.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as BlinsActions from './../../actions/BlinsActions';
import * as CategoryActions from './../../actions/CategoryActions';
import BlinsList from './../../components/BlinsList';
import DrawerMenu from './../main-menu/DrawerMenu';

class MainView extends Component {
    componentWillMount() {
        this.props.fetchCategories();
       // this.props.fetchBlins();
    }

    render() {
        //<BlinsList blins={this.props.blins}/>

        return (
            <View>
                <DrawerMenu />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blins: state.blinsReducer.blins,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...BlinsActions,
        ...CategoryActions,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
