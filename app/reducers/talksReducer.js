/**
 * Created by Elf on 15.08.2016.
 */
import * as ActionTypes from './../constants/TalksActionsTypes';

const initState = {
    talks: null,
}

export default function talksReducer(state = initState, action) {
    switch(action.type) {
        case ActionTypes.TALKS_FETCHED:
            return Object.assign({}, state, {
                talks: action.payload,
            });

        case ActionTypes.ADD_TALK:
            return Object.assign({}, state, {
                talks: state.talks.concat(action.payload),
            });

        default:
            return state;
    }
}
