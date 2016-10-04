/**
 * Created by Elf on 06.09.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Platform } from 'react-native';

import DimensionUtils from './../utils/dimentionUtils';
import LocationsList from './LocationsList';

export default class ChooseLocationView extends Component {
    static propTypes = {
        savedLocations: React.PropTypes.array.isRequired,
        pickUpLocation: React.PropTypes.func.isRequired,
        setCurrentLocation: React.PropTypes.func.isRequired,
        removeLocation: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.currLocation}>
                    <TouchableHighlight style={styles.currLocBtn}
                                        onPress={() => this.props.setCurrentLocation()}
                                        underlayColor={'rgba(0, 0, 0, 0.2)'}>
                        <Text style={styles.text3per}>CURRENT LOCATION</Text>
                    </TouchableHighlight>
                </View>
                {this.renderSavedLocationsList()}
            </View>
        )
    }

    renderSavedLocationsList() {
        if(this.props.savedLocations || this.props.savedLocations.length === 0) {
            return (
                <LocationsList style={styles.locationsList}
                               locations={this.props.savedLocations}
                               isShowRowDelBtns={true}
                               onRowTap={this.props.pickUpLocation}
                               onDelBtnTap={this.props.removeLocation}
                               detailInfo={false}/>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    currLocation: {
        justifyContent: 'center',
        alignItems: 'stretch',
        height: DimensionUtils.getHeightDimInPerc(10),
        borderBottomColor: '#E6EAED',
        borderBottomWidth: 1,
    },

    currLocBtn: {
        flex: 86,
        justifyContent: 'center',
        alignItems: 'center'
    },

    locationsList: {
        flex: 90,
    },

    text3per: {
        fontSize: DimensionUtils.getHeightDimInPerc(3),
        color: '#555',
        fontWeight: '300',
        fontFamily: (Platform.OS === 'ios') ? 'System': 'roboto_reg'
    },
});
