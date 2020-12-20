const initialState = {
  characters: [],
  likes: 0
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_CHARACTERS":
      return { ...state, characters: payload, likes: payload[0] };
    default:
      return state;
  }
}
