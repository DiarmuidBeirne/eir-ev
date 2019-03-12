import { FETCH_USERID } from './types';


export const fetchUserID = loginData => dispatch => {
        
        //fetch('https://9qj4ir3ba2.execute-api.us-east-2.amazonaws.com/prod/getUser', { 
        //   method: 'POST',
          
        //   headers: {
                    
        //             'Content-type': 'application/json'
        //             },
        //   body: {
        //     email: "johndoe@gmail.com"
        //     }
        // })
        // .then(function(response) {

        //   return response.json()

        // }).then(function(body) {
        //   console.log(body);
        // }).catch(error => console.error("Error: ", error));




    fetch('https://oxhgso52uf.execute-api.us-east-2.amazonaws.com/prod/-charger', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
      }).then(res => res.json())
        .then(post =>
          dispatch({
            type: FETCH_USERID,
            payload: post
          })
          
        ).catch(error => console.log("error:" + error));
    };

 

    
