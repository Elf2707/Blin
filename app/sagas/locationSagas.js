/**
 * Created by Elf on 14.08.2016.
 */
import { call, take, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { AsyncStorage } from 'react-native';

import * as ActionTypes from './../constants/LocationActionTypes';
import * as ErrorActionTypes from './../constants/ErrorActionTypes';
import PropsConfig from './../config/propsConfig';
import ErrorMessages from './../config/errorMessages';


export default function* startWatchLocations() {
    yield [takeEvery(ActionTypes.CMD_GET_LOCATIONS_FROM_DB, getSavedLocations),
        takeEvery(ActionTypes.CMD_DETECT_DEVICE_LOCATION, getDeviceLocation)];
}

function* getSavedLocations() {
    // Get locations saved by user from AsyncStore
    try {
        const locations = yield call(AsyncStorage.getItem, PropsConfig.SavedLocationsTag);

        if(locations === null) {
            throw new Error('Error while loading predefine locations');
        }

        yield put({
            type: ActionTypes.SAVED_LOCATIONS_FETCHED,
            payload: locations
        });
    } catch (e) {
        // Error retrieving saved locations just console.log it
        // it is not critical error
        console.log(e.message);
    }
}

function* getDeviceLocation() {
    function detectDeviceLocation(detectOptions) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (location) => resolve(location),
                (error) => reject(error), detectOptions)
        });
    }

    const options = {
        enableHighAccuracy: true,
        timeout: PropsConfig.locationDetectTimeout,
        maximumAge: 1000
    };

    var location = yield call(detectDeviceLocation, options);

    // Test if there was an error
    if(location.coords) {
        yield put({
            type: ActionTypes.DEVICE_LOCATION_DETECTED,
            payload: location,
        });
    } else {
        yield put({
            type: ErrorActionTypes.ERROR,
            payload: ErrorMessages.LocationServiceDisable,
        });
    }
}