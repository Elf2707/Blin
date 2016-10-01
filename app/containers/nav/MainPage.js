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
        // Start sagas to work
        this.props.startWatchCategories();
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
        if (!this.props.talks || !this.props.categories) {
            return (
                <ActivityIndicator color={'#4AABF7'}
                                   animating={true}
                                   size="large"/>
            )
        }

        return (
            <View>
                <TalksList talks={this.props.talks}
                           categories={this.props.categories}/>
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={this.renderContent.bind(this)}
                    ref={(drawer) => {
                    this.drawer = drawer;
                }}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        talks: state.talksReducer.talks,
        categories: state.categoriesReducer.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...TalksActions,
        ...CategoryActions,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
