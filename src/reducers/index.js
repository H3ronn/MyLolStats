const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAMP':
      console.log([...state, action.payload.championName]);
      return state.includes(action.payload.championName)
        ? state.filter(item => item !== action.payload.championName)
        : [...state, action.payload.championName];
      break;

    default:
      return state;
  }
};

export default rootReducer;
