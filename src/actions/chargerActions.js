import { FETCH_CHARGERS } from './types';


export const fetchChargers = () => dispatch =>{
        
        fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger')
    .then(res => res.json())
    .then(json => dispatch({
        type: FETCH_CHARGERS,
        payload: json
    }));

    };

    export const fetchCharger = () => dispatch =>{
        
        fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger')
    .then(res => res.json())
    .then(json => dispatch({
        type: FETCH_CHARGERS,
        payload: json
    }));

    };
