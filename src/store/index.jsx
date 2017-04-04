import { combineReducers } from 'redux';
import PagesReducer from './PagesReducer';

const rootReducer = combineReducers({
    pages: PagesReducer,
});

export default rootReducer;
