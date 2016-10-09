/**
 * Created by Elf on 06.09.2016.
 */
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LocationActions from './../actions/LocationActions';
import ChooseLocationView from './../components/ChooseLocationView';

class ChooseLocation extends Component {
    render() {
        const { deviceLocation, savedLocations } = this.props;

        if (!deviceLocation) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                    <ActivityIndicator color={'#4AABF7'}
                                       animating={true}
                                       size={'large'}/>
                </View>
            )
        }

        return (
            <ChooseLocationView
                savedLocations={this.props.savedLocations}
                pickUpLocation={this._handlePickUpLocation.bind(this)}
                setCurrentLocation={this._handleSetCurrentLocation.bind(this)}
                removeLocation={this._handleRemoveLocation.bind(this)}/>
        )
    }

    componentWillMount() {
        this.props.getDeviceLocation();
        this.props.getSavedLocations();
    }

    _handlePickUpLocation(location) {
        console.log('Pick up location');
    }

    _handleSetCurrentLocation() {
        console.log('Pick up current location');
    }

    _handleRemoveLocation() {
        console.log('Remove location');
    }
}

const mapStateToProps = (state) => {
    return {
        savedLocations: state.locationsReducer.savedLocations,
        deviceLocation: state.locationsReducer.deviceLocation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LocationActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLocation);