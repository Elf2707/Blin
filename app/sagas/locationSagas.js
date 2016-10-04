/**
 * Created by Elf on 14.08.2016.
 */
import { call, take, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as ActionTypes from './../constants/LocationActionTypes';
import PropsConfig from './../config/propsConfig';

export default function* startWatchLocations() {
    yield takeLatest(ActionTypes.GET_LOCATIONS_FROM_DB, getSavedLocations);
}

function* getSavedLocations() {
    // Get locations saved by user from AsyncStore
    try {
        const locations = JSON.parse(yield call(AsyncStorage.getItem, PropsConfig.SavedLocationsTag));

        yield put({
            type: ActionTypes.GET_LOCATIONS_FROM_DB,
            payload: locations
        });
    } catch (e) {
        // Error retrieving saved locations just console.log it
        // it is not critical error
        console.log(e.message);
    }
}
