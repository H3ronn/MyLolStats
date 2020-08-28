import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { LeagueNames as Names } from 'ChampionsNames';
import LoadingPage from 'Components/Molecules/LoadingPage';
import ChampionDetailsTemplate from 'Templates/ChampionDetailsTemplate';
import { connect } from 'react-redux';
import { addFavouriteChamp as addFavouriteChampAction } from 'actions';

const ChampionDetails = ({ match, addFavouriteChamp, favouriteChampList }) => {
  const {
    params: { name },
  } = match;

  const [fetchQuery] = Names.filter(champname => champname.toLowerCase().includes(name));

  const [detailsContent, setDetailsContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      informations: '',
      stats: '',
      skins: '',
      spells: '',
    },
  );

  const [loading, setLoading] = useState(true);

  // const getInformations2 = (query) => {

  //   axios
  //     .get(
  //       `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion/${query}.json`
  //     )
  //     .then((result) => {
  //       const informations = result.data.data[fetchQuery];
  //       setInformations(informations);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const getInformations = async query => {
    if (query === 'Wukong') {
      query = 'MonkeyKing';
    }
    try {
      const fetchInformations = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/10.16.1/data/pl_PL/champion/${query}.json`,
      );

      setDetailsContent({
        informations: fetchInformations.data.data[query],
        spells: fetchInformations.data.data[query].spells,
        stats: fetchInformations.data.data[query].stats,
        skins: fetchInformations.data.data[query].skins,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInformations(fetchQuery);
    console.log(fetchQuery);
  }, [fetchQuery]);

  useEffect(() => {
    localStorage.setItem('myState', favouriteChampList);
  });

  return (
    <>
      {console.log(detailsContent.informations)}
      {loading ? (
        <LoadingPage />
      ) : (
        <ChampionDetailsTemplate
          detailsContent={detailsContent}
          addFavouriteChamp={addFavouriteChamp}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return { favouriteChampList: state };
};

const mapDispatchToProps = dispatch => ({
  addFavouriteChamp: championName => dispatch(addFavouriteChampAction(championName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChampionDetails);
