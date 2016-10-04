/**
 * Created by Elf on 06.09.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LocationActions from './../actions/LocationActions';
import ChooseLocationView from './../components/ChooseLocationView';

class ChooseLocation extends Component {
    render() {
        return (
            <ChooseLocationView
                savedLocations={this.props.savedLocations}
                pickUpLocation={this._handlePickUpLocation.bind(this)}
                setCurrentLocation={this._handleSetCurrentLocation.bind(this)}
                removeLocation={this._handleRemoveLocation.bind(this)} />
        )
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
        savedLocations: state.locationsReducer.savedLocations
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LocationActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLocation);