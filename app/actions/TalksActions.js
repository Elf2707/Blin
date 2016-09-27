/**
 * Created by Elf on 14.08.2016.
 */
import * as ActionTypes from './../constants/TalksActionsType';
import blins from './../../data/blins.json';

export function fetchTalks() {
    // Get talks
    return (dispatch) => {
        dispatch({
            type: ActionTypes.FETCH_TALKS,
            payload: blins.blins,
        });
    };
}

export function addTalk(talk) {
    // Add talk
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_TALK,
            payload: talk,
        });
    };
}
