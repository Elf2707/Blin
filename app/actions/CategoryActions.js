/**
 * Created by Elf on 03.08.2016.
 */
import * as ActionTypes from './../constants/CategoriesActionsTypes';

export function startWatchCategories() {
    return {
        type: ActionTypes.START_WATCH_CATEGORIES,
        payload: null,
    };
}
