/**
 * Created by Elf on 03.08.2016.
 */
import * as ActionTypes from './../constants/CategoriesActionsTypes';
import FirebaseMgr from './../database/FirebaseMgr';

const Categories = FirebaseMgr.database().ref('categories/');

export function fetchCategories() {
    return (dispatch) => {
        Categories.on('value', (snapshot) => {
            console.log(snapshot.val());
            dispatch({
                type: ActionTypes.FETCH_CATEGORIES,
                payload: snapshot.val(),
            });
        }, err => console.log(err));
    };
}
