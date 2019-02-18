import { FETCH_CHARGERS } from '../actions/types';

const initialState = {

    chargers: []
};


export default function(state = initialState, action) {
    switch(action.type)
    {
        case FETCH_CHARGERS:
        console.log("reducer");
        return {
            ...state,
            chargers: action.payload.Items
        };


        default:
        return state;

    }
}