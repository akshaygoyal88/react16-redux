import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import charts from './chartReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  charts,
  ajaxCallsInProgress
});

export default rootReducer;
