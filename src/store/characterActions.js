import React from 'react';
import axios from 'axios';


const api = 'https://myheroacademiaapi.com/api/character?quirk=One%20For%20All&affiliation=U.A';
export const getCharacters = () => async (dispatch) => {

  const response = await axios.get(api);
  const items = response.data.result;
  console.log('Get:', items)
  dispatch({
    type: 'GET_CHARACTERS',
    payload: items
  });
};
