/**
 * Created by Elf on 03.08.2016.
 */
import * as ActionTypes from './../constants/CategoriesActionsTypes';
import FirebaseMgr from './../database/FirebaseMgr';
import dummyCategories from './../../data/coategories.json';

const Categories = FirebaseMgr.database().ref('categories/');

export function fetchCategories() {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.FETCH_CATEGORIES,
            payload: dummyCategories.categories,
        });
    };

   // Categories.on('value', (snapshot) => {
   //     console.log(snapshot)
   //     return (dispatch) => {
   //         console.log(snapshot.val());
   //         dispatch({
   //             type: ActionTypes.FETCH_CATEGORIES,
   //             payload: snapshot.val(),
   //         });
   //     };
   //}, err => console.log(err));
}
