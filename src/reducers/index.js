/**
 * Created by kagek_000 on 10/31/2016
 */
import { combineReducers } from 'redux';
import interns from './interns';
import inputs from './inputs';

const internApp = combineReducers({interns, inputs});

export default internApp;