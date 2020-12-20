import axios from "axios";

const api = "https://myheroacademiaapi.com/api";
export const getCharacters = () => async (dispatch) => {
  const response = await axios.get(api);
  const items = response.data.results;
  dispatch({
    type: "GET_CHARACTERS",
    payload: items
  });
};
