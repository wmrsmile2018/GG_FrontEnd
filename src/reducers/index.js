import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

// import drugs from './drugs';
// import comments from './comments';
// import patients from './patients';
import path from './path';
import ws from './webSocket';
// import sessions from './sessions';
// import profile from './profile';
// import statistics from './statistics';
// import recommendations from './recommendations';

const rootReducer = combineReducers({
   path, sessionReducer, ws
 });

export default rootReducer;
