/**
 * Created by Elf on 06.10.2016.
 */
import React, { Component } from 'react';
import { View,
    StyleSheet, Text } from 'react-native';
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

        const region = {
            ...this.state.region,
            latitude: latitude,
            longitude: longitude,
        }

        this.setState({
            region: {
                ...this.state.region,
                latitude: latitude,
                longitude: longitude,
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
