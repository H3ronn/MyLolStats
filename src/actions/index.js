export const addFavouriteChamp = (championName) => {
  return {
    type: 'ADD_CHAMP',
    payload: {
      championName,
    },
  };
};
