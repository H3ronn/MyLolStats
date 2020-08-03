import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import SimpleSlider from "Components/Organisms/SimpleSlider";
import axios from "axios";
import { LeagueNames as Names } from "ChampionsNames";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 15px;
  font-weight: 500;
  padding: 0 10px 10px;
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

const StyledSliderContainer = styled.div`
  /* width: 50vw;
  height: 50vh; */
  
`;

// const UpperWrapper = styled.div`
//   display: flex;
// `;

const ChampionDetails = ({ match }) => {
  const {
    params: { name },
  } = match;

  const [fetchQuery] = Names.filter((champname) =>
    champname.toLowerCase().includes(name)
  );

  const [informations, setInformations] = useState({});
  const [skins, setSkins] = useState();

  const getInformations = (query) => {

    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion/${query}.json`
      )
      .then((result) => {
        const informations = result.data.data[fetchQuery];
        setInformations(informations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInformations2 = async (query) => {
    if (query === "Wukong") { query = "MonkeyKing"; }
    try {
      const fetchInformations = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion/${query}.json`
      );
      setInformations(fetchInformations.data.data[query]);
      setSkins(fetchInformations.data.data[query].skins);
      // console.log(informations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getInformations(fetchQuery);
    getInformations2(fetchQuery);
  }, [fetchQuery]);

  return (
    <StyledWrapper>
      {console.log(informations)}
      <StyledHeading>{informations.name}</StyledHeading>
      <StyledParagraph>{informations.title}</StyledParagraph>
      <SimpleSlider skins={skins} championId={informations.id === "Wukong" ? "MonkeyKing" : informations.id} />
      <StyledCategories>
        {informations.tags && informations.tags.map(role => (
          <StyledParagraph key={role}>{role}</StyledParagraph>
        ))}
      </StyledCategories>
      <StyledDescription>{informations.lore}</StyledDescription>
    </StyledWrapper>
  );
  // return (
  //   <MainSlider />
  // );
};

export default ChampionDetails;
