const initialState = [];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CHARACTERS':
      
      return payload;
    default:
      return state;
  }
}
