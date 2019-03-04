import { FETCH_USERID } from './types';


export const fetchUserID = loginData => dispatch => {
        console.log("being called:" + loginData);
    fetch('https://9qj4ir3ba2.execute-api.us-east-2.amazonaws.com/prod/getUser', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        .then(res => res.json())
        .then(post =>
          dispatch({
            type: FETCH_USERID,
            payload: post
          })
        );
    };

    
