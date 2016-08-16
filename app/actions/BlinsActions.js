/**
 * Created by Elf on 14.08.2016.
 */
import * as ActionTypes from './../constants/BlinsActionsType';
import blins from './../../data/blins.json';

export function fetchBlins() {
    // Get blins
    return (dispatch) => {
        dispatch({
            type: ActionTypes.FETCH_BLINS,
            payload: blins.blins,
        });
    };
}
