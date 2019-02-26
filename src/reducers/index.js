import { combineReducers } from 'redux';
import chargerReducer from './chargerReducer';
import bookingReducer from './bookingReducer';


export default combineReducers({
    chargers: chargerReducer,
    bookings: bookingReducer
});