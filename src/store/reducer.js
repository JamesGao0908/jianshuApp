import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store/';

const mainReducer = combineReducers ({
    header : headerReducer,
})

export default mainReducer;
