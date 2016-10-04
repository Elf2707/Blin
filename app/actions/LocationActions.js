/**
 * Created by Elf on 04.09.2016.
 */
import { AsyncStorage } from 'react-native';

import * as ActionTypes from './../constants/LocationActionTypes';
import PropsConfig from './../config/propsConfig';

export function addLocation(location) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_LOCATION,
            payload: location,
        });
    }
}

export function removeLocation(locationIndex) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REMOVE_LOCATION,
            payload: locationIndex
        });
    }
}

export function saveLocationsToDb(locations) {
    return async (dispatch) => {
        // Save locations object to AsyncStore
        try {
            await AsyncStorage.setItem(PropsConfig.SavedLocationsTag,
                JSON.stringify(locations));
        } catch (e) {
            console.log(e);
            // Just put a message to console it actually not critical if
            // we couldn't save locations
        }

        // We do not need to fire action because application state didn't change
    }
}

export function getLocationsFromDb() {
    return async (dispatch) => {
        // Get locations saved by user from AsyncStore
        try {
            const locations = JSON.parse(await AsyncStorage.getItem(PropsConfig.SavedLocationsTag));

            if (locations !== null) {
                dispatch({
                    type: ActionTypes.GET_LOCATIONS_FROM_DB,
                    payload: locations
                });
            } else {
                // There are no locations save in DB
                dispatch({
                    type: ActionTypes.GET_LOCATIONS_FROM_DB,
                    payload: []
                });
            }
        } catch (e) {
            // Error retrieving data
            console.log(e.message);
            dispatch({
                type: ActionTypes.GET_LOCATIONS_FROM_DB,
                payload: []
            });
        }
    }
}

