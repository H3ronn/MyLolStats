const initialState = {
  nic: 'notink',
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
};

export default rootReducer;
