/**
 * Created by Elf on 14.08.2016.
 */
import * as ActionTypes from './../constants/TalksActionsTypes';

export function startWatchTalks() {
    return ({
        type: ActionTypes.START_WATCH_TALKS,
        payload: null,
    });
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
