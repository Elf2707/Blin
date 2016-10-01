/**
 * Created by Elf on 14.08.2016.
 */
import { call, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import * as ActionTypes from './../constants/TalksActionsTypes';
import FirebaseMgr from './../database/FirebaseMgr';

const Talks = FirebaseMgr.database().ref('talks/');

const createTalksDbChannel = () => {
    // Create event channel to firebase
    return eventChannel(emit => {

        const _handleGetValue = (data) => {
            // Get value from Db emit it to channel
            emit(data.val());
        };

        const _handleGetError = (error) => {
            emit(error);
        };

        // Setup the subscription
        Talks.on('value', _handleGetValue, _handleGetError);

        // Return unsubscriber
        const unsubscribe = () => {
            Talks.off('value', _handleGetValue, _handleGetError);
        };

        return unsubscribe
    });
};

export default function* startWatchTalks() {

    const talksDbChannel = yield call(createTalksDbChannel)

    while (true) {
        // Get new data update store
        const payload = yield take(talksDbChannel);
        yield put({ type: ActionTypes.TALKS_FETCHED, payload });
    }
}