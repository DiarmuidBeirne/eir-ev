import { FETCH_USERID } from '../actions/types';

const initialState = {

    user: {}
};


export default function(state = initialState, action) {
    switch(action.type)
    {
        case FETCH_USERID:
        
        return {
            ...state,
            user: action.payload.Item
        };


        default:
        return state;

    }
}