/**
 * Created by Elf on 12.06.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';

import AddTalk from './../../components/AddTalk';

class AddTalkPage extends Component {
    render() {
        return (
            <AddTalk
                categories={[]}
                onAddBlin={null}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer.categories,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTalkPage);

