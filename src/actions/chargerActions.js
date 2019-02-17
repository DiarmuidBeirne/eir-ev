import { FETCH_CHARGERS } from './types';


export function fetchChargers() {
    return function(dispatch) {
        fetch('https://61rek4ywu6.execute-api.us-east-2.amazonaws.com/live/-charger')
    .then(res => res.json())
    .then(json => dispatch({
        type: FETCH_CHARGERS,
        payload: json
    }));

    }
}