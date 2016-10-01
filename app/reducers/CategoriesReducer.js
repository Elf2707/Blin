/**
 * Created by Elf on 30.07.2016.
 */
import * as types from './../constants/CategoriesActionsTypes';

const initialState = {
    categories: null,
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case types.CATEGORIES_FETCHED:
            return Object.assign({}, state, {
                categories: action.payload,
            });

        default:
            return state;
    }
}
