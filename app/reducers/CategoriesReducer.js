/**
 * Created by Elf on 30.07.2016.
 */
import * as types from './../constants/CategoriesActionsTypes';

const initialState = {
    categories: [],
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case types.CATEGORIES_FETCHED:
            const categories = Object.values(action.payload).map(value => value);

            return Object.assign({}, state, { categories });

        default:
            return state;
    }
}
