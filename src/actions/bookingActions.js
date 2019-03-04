import { NEW_BOOKING, FETCH_BOOKINGS} from './types';





    
    export const createBooking = bookingData => dispatch => {
      console.log(bookingData);
        fetch('https://oiv9h98hb4.execute-api.us-east-2.amazonaws.com/prod/-charger', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        })
          .then(res => res.json())
          .then(post =>
            dispatch({
              type: NEW_BOOKING,
              payload: post
            })
          );
      };

      export const fetchBookings = () => dispatch =>{
        console.log("bookings being fetched");
        fetch('https://oiv9h98hb4.execute-api.us-east-2.amazonaws.com/prod/-charger')
    .then(res => res.json())
    .then(json => dispatch({
        type: FETCH_BOOKINGS,
        payload: json
    }));

    };