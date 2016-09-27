/**
 * Created by Elf on 27.07.2016.
 */
import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import talksReducer from './talksReducer';

export default combineReducers({
    categoriesReducer,
    talksReducer,
});
