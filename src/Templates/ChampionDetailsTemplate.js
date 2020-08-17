import React from 'react';
import styled, { keyframes } from "styled-components";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import SimpleSlider from "Components/Organisms/SimpleSlider";
import SpellContainer from 'Components/Molecules/SpellContainer';

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

const SpellList = styled.ul`
  display: flex;
  flex-direction: column;
`;


const ChampionDetailsTemplate = ({ detailsContent }) => {

  const { informations, spells, stats, skins } = detailsContent;

  return (
    <StyledWrapper>
      <StyledHeading>{informations.name}</StyledHeading>
      <StyledParagraph>{informations.title}</StyledParagraph>
      <SimpleSlider skins={skins} championId={informations.id} />
      <StyledCategories>
        {informations.tags && informations.tags.map(role => (
          <StyledParagraph key={role}>{role}</StyledParagraph>
        ))}
      </StyledCategories>
      <StyledDescription>{informations.lore}</StyledDescription>
      <Heading>Umiejętności</Heading>
      <div>
        <SpellList>
          <SpellContainer spell={informations.passive} />
          {spells.map(spell => (
            <SpellContainer spell={spell} />
          ))}
        </SpellList>
      </div>
      <div>
        <Heading>Statystki</Heading>
        {Object.keys(stats).map(key => (<Paragraph key={key}>{key} : {stats[key]}</Paragraph>))}
      </div>
    </StyledWrapper>
  );
};

export default ChampionDetailsTemplate;