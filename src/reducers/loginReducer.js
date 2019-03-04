import { FETCH_USERID } from '../actions/types';

const initialState = {

    userID: {}
};


export default function(state = initialState, action) {
    switch(action.type)
    {
        case FETCH_USERID:
        console ("it workds");
        return {
            ...state,
            userID: action.payload.Items
        };


        default:
        return state;

    }
}