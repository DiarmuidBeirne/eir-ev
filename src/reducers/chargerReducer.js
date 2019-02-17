import { FETCH_CHARGERS } from '../actions/types';

const initialState = {

    chargers: []
}


export default function(state = initialState, action) {
    switch(action.type)
    {
        case FETCH_CHARGERS:
        return {
            ...state,
            items: action.payload
        }


        default :
        return state;

    }
}