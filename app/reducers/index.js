/**
 * Created by Elf on 27.07.2016.
 */
import { combineReducers } from 'redux';

import categoriesReducer from './CategoriesReducer';
import blinsReducer from './BlinsReducer';

export default combineReducers({
    categoriesReducer,
    blinsReducer,
});
