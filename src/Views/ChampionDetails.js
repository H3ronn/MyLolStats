import React, { useEffect, useState, useReducer } from "react";
import styled, { keyframes } from "styled-components";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import SimpleSlider from "Components/Organisms/SimpleSlider";
import axios from "axios";
import { LeagueNames as Names } from "ChampionsNames";
import LoadingPage from 'Components/Molecules/LoadingPage';

const appearance = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearance} .5s;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 15px;
  font-weight: 500;
  padding: 10px 10px 20px;
`;

const StyledHeading = styled(Heading)`
  padding: 10px 0 0;
`;

const StyledCategories = styled.div`
  display: flex;
`;

const StyledDescription = styled(Paragraph)`
  width: 80vw;
`;


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


  const { informations, spells, stats, skins } = detailsContent;

  return (
    <>
      {loading ? (<LoadingPage />) : (
        <StyledWrapper>
          {console.log(detailsContent.informations)}
          <StyledHeading>{informations.name}</StyledHeading>
          <StyledParagraph>{informations.title}</StyledParagraph>
          <SimpleSlider skins={skins} championId={informations.id} />
          <StyledCategories>
            {informations.tags && informations.tags.map(role => (
              <StyledParagraph key={role}>{role}</StyledParagraph>
            ))}
          </StyledCategories>
          <StyledDescription>{informations.lore}</StyledDescription>
          <div>
            <Heading>Umiejętności</Heading>

          </div>
          <div>
            <Heading>Statystki</Heading>
            {Object.keys(stats).map(key => (<Paragraph key={key}>{key} : {stats[key]}</Paragraph>))}
          </div>
        </StyledWrapper>)}

    </>
  );
};

export default ChampionDetails;
