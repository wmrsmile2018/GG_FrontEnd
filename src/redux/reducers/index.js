import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

import path from './path';
import ws from './webSocket';
import signUp from './signUp';

const rootReducer = combineReducers({
   path, sessionReducer, ws, signUp
 });

export default rootReducer;
