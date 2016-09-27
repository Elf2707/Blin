/**
 * Created by Elf on 15.08.2016.
 */
import * as ActionTypes from './../constants/TalksActionsType';

const initState = {
    talks: [],
}

export default function blinsReducer(state = initState, action) {
    switch(action.type) {
        case ActionTypes.FETCH_TALKS:
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
