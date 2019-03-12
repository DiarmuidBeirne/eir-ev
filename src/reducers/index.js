import { combineReducers } from 'redux';
import chargerReducer from './chargerReducer';
import bookingReducer from './bookingReducer';
import loginReducer from './loginReducer';


export default combineReducers({
    chargers: chargerReducer,
    bookings: bookingReducer,
    user: loginReducer
});