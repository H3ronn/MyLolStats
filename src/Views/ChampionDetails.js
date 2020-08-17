import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { LeagueNames as Names } from "ChampionsNames";
import LoadingPage from 'Components/Molecules/LoadingPage';
import ChampionDetailsTemplate from 'Templates/ChampionDetailsTemplate';

const ChampionDetails = ({ match }) => {
  const {
    params: { name },
  } = match;

  const [fetchQuery] = Names.filter((champname) =>
    champname.toLowerCase().includes(name)
  );

  const [detailsContent, setDetailsContent] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      informations: "",
      stats: "",
      skins: "",
      spells: ""
    });

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

  const getInformations = async (query) => {
    if (query === "Wukong") { query = "MonkeyKing"; }
    try {
      const fetchInformations = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/pl_PL/champion/${query}.json`
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
  }, [fetchQuery]);


  return (
    <>
      {/* {console.log(detailsContent.informations)} */}
      {loading ? (<LoadingPage />
      ) : (
          <ChampionDetailsTemplate detailsContent={detailsContent} />
        )}
    </>
  );
};

export default ChampionDetails;
