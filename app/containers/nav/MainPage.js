/**
 * Created by Elf on 12.06.2016.
 */
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as TalksActions from './../../actions/TalksActions';
import * as CategoryActions from './../../actions/CategoryActions';
import TalksList from './../../components/TalksList';
import DrawerMenu from './../main-menu/DrawerMenu';

class MainPage extends Component {
    componentWillMount() {
        //  this.props.startWatchCategories();
        this.props.startWatchTalks();
    }

    render() {
        return (
            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                {this.renderTaskList()}
            </View>
        );
    }

    renderTaskList() {
        if (!this.props.talks) {
            return (
                <ActivityIndicator color={'#4AABF7'}
                                   animating={true}
                                   size="large"/>
            )
        }

        return (
            <TalksList talks={this.props.talks}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
