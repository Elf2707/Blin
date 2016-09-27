/**
 * Created by Elf on 12.06.2016.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as TalksActions from './../../actions/TalksActions';
import * as CategoryActions from './../../actions/CategoryActions';
import TalksList from './../../components/TalksList';
import DrawerMenu from './../main-menu/DrawerMenu';

class MainView extends Component {
    componentWillMount() {
        this.props.fetchCategories();
        this.props.fetchTalks();
    }

    render() {
        return (
            <View>
                <TalksList talks={this.props.talks}/>
                <DrawerMenu />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        talks: state.talksReducer.talks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...TalksActions,
        ...CategoryActions,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
