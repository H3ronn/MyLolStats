// localStorage.setItem('myState', ['Akali', 'Aatrox', 'Annie']);

const savedState = localStorage.getItem('myState').split(',');
console.log(savedState);

const initialState = savedState ? savedState : [];
// const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAMP':
      // localStorage.setItem('myState', state.join());
      // const savedState = localStorage.getItem('state');
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
// case 'ADD_CHAMP':
//       localStorage.setItem('state', state);
//       console.log([...state, action.payload.championName]);
//       return state.includes(action.payload.championName)
//         ? state.filter(item => item !== action.payload.championName)
//         : [...state, action.payload.championName];
//       break;
