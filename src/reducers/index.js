import { combineReducers } from 'redux';
import { chargerReducer } from './chargerReducer'


export default combineReducers({
    chargers: chargerReducer
});