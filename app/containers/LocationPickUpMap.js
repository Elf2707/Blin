/**
 * Created by Elf on 06.09.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LocationActions from './../actions/LocationActions';
import LocationPickUpMapView from './../components/LocationPickUpMapView';

class ChooseLocation extends Component {
    render() {
        return (
            <LocationPickUpMapView
                deviceLocation={this.props.deviceLocation}
                saveNewLocation={this._handleSaveNewLocation.bind(this)}/>
        )
    }

    _handleSaveNewLocation() {
        console.log('Pick up location');
    }
}

const mapStateToProps = (state) => {
    return {
        deviceLocation: state.locationsReducer.deviceLocation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LocationActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLocation);