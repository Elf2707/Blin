/**
 * Created by Elf on 06.10.2016.
 */
import React, { Component } from 'react';
import { View,
    StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

import flagImg from './../assets/images/list.png';
import DimensionUtils from './../utils/dimentionUtils';

const ASPECT_RATIO = DimensionUtils.getWidthDimInPerc(100) / DimensionUtils.getHeightDimInPerc(100);
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class LocationPickUpMap extends Component {
    static propTypes = {}

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={ PROVIDER_DEFAULT}
                    style={styles.map}
                    initialRegion={this.state.region}
                    loadingEnabled
                    loadingIndicatorColor={"#666666"}
                    loadingBackgroundColor={"#eeeeee"}
                >
                    <MapView.Marker
                        coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
                        centerOffset={{ x: -18, y: -60 }}
                        anchor={{ x: 0.69, y: 1 }}
                        image={flagImg}
                    />
                    <MapView.Marker
                        coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
                        centerOffset={{ x: -42, y: -60 }}
                        anchor={{ x: 0.84, y: 1 }}
                    >
                        <MapView.Callout>
                            <View>
                                <Text>This is a plain view</Text>
                            </View>
                        </MapView.Callout>
                    </MapView.Marker>
                </MapView>
                <View style={styles.buttonContainer}>
                    <View style={styles.bubble}>
                        <Text>Map with Loading</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        height: DimensionUtils.getHeightDimInPerc(100),
        width: DimensionUtils.getWidthDimInPerc(100),
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
