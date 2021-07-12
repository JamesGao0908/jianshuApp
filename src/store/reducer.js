import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store/';

const mainReducer = combineReducers ({
    header : headerReducer,
})

export default mainReducer;
