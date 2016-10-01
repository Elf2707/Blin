/**
 * Created by Elf on 14.08.2016.
 */
import { call, take, put } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga';

import * as ActionTypes from './../constants/CategoriesActionsTypes';
import FirebaseMgr from './../database/FirebaseMgr';

const Categories = FirebaseMgr.database().ref('categories/');

const createCategoriesDbChannel = () => {
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
        Categories.on('value', _handleGetValue, _handleGetError);

        // Return unsubscriber
        const unsubscribe = () => {
            Categories.off('value', _handleGetValue, _handleGetError);
        };

        return unsubscribe
    });
};

export default function* startWatchCategories() {

    const categoriesDbChannel = yield call(createCategoriesDbChannel)

    while (true) {
        // Get new data update store
        const payload = yield take(categoriesDbChannel);
        yield put({ type: ActionTypes.CATEGORIES_FETCHED, payload });
    }
}
