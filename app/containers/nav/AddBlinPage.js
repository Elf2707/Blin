/**
 * Created by Elf on 12.06.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import * as CategoryActions from './../../actions/CategoryActions';
import * as BlinsActions from './../../actions/BlinsActions';
import AddBlinForm from './../../components/AddBlin';

class AddBlinView extends Component {
    constructor(props) {
        super(props);

        console.log(this.props)
        this.props.fetchCategories();
    }

    render() {
        if (!this.props.categories) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (
            <AddBlinForm
                categories={this.props.categories}
                onAddBlin={this.props.addBlin}/>
        );
    }

    componentWillMount() {
    }

    commonentDidMount() {
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer.categories,
    };
}

const dispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(CategoryActions.fetchCategories()),
        addBlin: (blin) => dispatch(BlinsActions.addBlin(blin)),
    };
}

const AddBlinPage = connect(mapStateToProps, dispatchToProps)(AddBlinView);

export default AddBlinPage;
