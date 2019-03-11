import { NEW_BOOKING, FETCH_BOOKINGS } from '../actions/types';

const initialState = {

    item: {},
    bookings: []
};


export default function(state = initialState, action) {
    switch(action.type)
    {
        case NEW_BOOKING:
        console.log("new booking reducer");
        console.log(action.payload.Items);
        return {
            ...state,
            item: action.payload.Items
        };
        
        case FETCH_BOOKINGS:
        console.log("BOOKING reducer");
        return {
            ...state,
            bookings: action.payload.Items
        };



        default:
        return state;

    }
}