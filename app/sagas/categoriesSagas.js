/**
 * Created by Elf on 14.08.2016.
 */
import { put, take } from 'redux-saga/effects'

import * as ActionTypes from './../constants/CategoriesActionsTypes';
import FirebaseMgr from './../database/FirebaseMgr';

const Categories = FirebaseMgr.database().ref('categories/');

export function* startWatchCategories() {
    yield take(ActionTypes.START_WATCH_CATEGORIES);

    Categories.on('value', (snapshot) => {
        put({
            type: ActionTypes.CATEGORIES_FETCHED,
            payload: snapshot.val(),
        });
    }, err => console.log(err));
}