import React from 'react';
import axios from 'axios';


const api = 'https://myheroacademiaapi.com/api/character';
export const getCharacters = () => async (dispatch) => {

  const response = await axios.get(api);
  const items = response.data.result;
  console.log('Get:', items)
  dispatch({
    type: 'GET_CHARACTERS',
    payload: items
  });
};
