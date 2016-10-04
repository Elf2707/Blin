/**
 * Created by Elf on 04.09.2016.
 */
import * as ActionTypes from './../constants/LocationActionTypes';

const initState = {
    savedLocations: [],
};

export default function savedLocationsReducer(state = initState, action) {
    switch(action.type) {
        case ActionTypes.GET_LOCATIONS_FROM_DB:
            return Object.assign({}, state, {
                savedLocations: action.payload
            });

        case ActionTypes.ADD_LOCATION:
            return Object.assign({}, state, {
                savedLocations: state.savedLocations.concat(action.payload)
            });

        case ActionTypes.REMOVE_LOCATION:
            return Object.assign({}, state, {
                savedLocations: state.savedLocations.filter((location, index) => {
                    return index !== action.payload;
                })
            });

        default:
            return state;
    }
}
