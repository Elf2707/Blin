/**
 * Created by Elf on 06.10.2016.
 */
import React, { Component } from 'react';
import { View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Platform,
    TextInput } from 'react-native';
import { FormLabel, FormInput, SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';

import DimensionUtils from './../utils/dimentionUtils';
import PropsConfig from './../config/propsConfig';

export default class LocationPickUpMapView extends Component {
    static propTypes = {
        deviceLocation: React.PropTypes.object.isRequired,
        saveNewLocation: React.PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        const latitudeDelta = PropsConfig.latitudeDelta;
        const longitudeDelta = latitudeDelta *
            DimensionUtils.getWidthDimInPerc(100) / DimensionUtils.getHeightDimInPerc(100);

        this.state = {
            locationName: '',
            region: {
                latitude: this.props.deviceLocation.coords.latitude,
                longitude: this.props.deviceLocation.coords.longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
            },
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.locationNameContainer}>
                    <View style={styles.locationNameInputGroup}>
                        <TextInput style={styles.locationNameInputElement}
                                   placeholder={'Location Name'}
                                   placeholderTextColor={'#1976D255'}
                                   underlineColorAndroid={'rgba(0, 0, 0, 0.0)'}
                                   onChangeText={(text) => this.setState({
                                           locationName: text
                                       })}
                                   value={this.state.locationName}/>
                    </View>
                    <TouchableHighlight style={styles.locationSaveBtn}
                                        onPress={this._handleSaveLocation.bind(this)}
                                        underlayColor={'rgba(255, 255, 255, 0.4)'}>
                        <Text style={styles.text2d5per}>Save</Text>
                    </TouchableHighlight>
                </View>
                <MapView
                    provider={'google'}
                    initialRegion={this.state.region}
                    region={this.state.region}
                    onPress={this._handlePress.bind(this)}
                    showsUserLocation={true}
                    showCompass={false}
                    style={styles.map}
                    rotateEnabled={false}
                    loadingEnabled={true}
                    loadingIndicatorColor={'#4AABF7'}
                    loadingBackgroundColor={'#E6EAED'}>

                    <MapView.Marker
                        title="Pick Up Location"
                        description="Save this location"
                        coordinate={this.state.region}/>

                </MapView>
            </View>
        );
    }

    _handlePress(e) {
        const {latitude, longitude } = e.nativeEvent.coordinate;

        this.setState({
            region: {
                ...this.state.region,
                latitude: latitude,
                longitude: longitude,
            }
        });
    }

    _handleSaveLocation() {
        if (this.state.locationName) {
            console.log('save location ' + this.state.locationName);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    locationNameContainer: {
        width: DimensionUtils.getWidthDimInPerc(100),
        height: DimensionUtils.getHeightDimInPerc(7),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4AABF7',
        padding: 10,
        paddingLeft: 15,
    },

    locationNameInputGroup: {
        flex: 80,
        height: DimensionUtils.getHeightDimInPerc(5),
        backgroundColor: '#FFF',
        borderRadius: DimensionUtils.getHeightDimInPerc(3.5),
        paddingLeft: DimensionUtils.getHeightDimInPerc(1.3),
    },

    locationNameInputElement: {
        flex: 83,
        color: '#1976D2',
        fontSize: DimensionUtils.getHeightDimInPerc(2.3),
        fontFamily: (Platform.OS === 'ios') ? 'System' : 'roboto_reg',
        fontWeight: (Platform.OS === 'ios') ? '400' : '300',
    },

    locationSaveBtn: {
        flex: 17,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        paddingBottom: DimensionUtils.getHeightDimInPerc(0.85),
    },

    text2d5per: {
        fontSize: DimensionUtils.getHeightDimInPerc(2.5),
        color: '#FFF',
        fontWeight: '400',
        fontFamily: (Platform.OS === 'ios') ? 'Roboto' : 'roboto_reg'
    },

    map: {
        flex: 1,
        width: DimensionUtils.getWidthDimInPerc(100),
    },
});
