import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'Components/Atoms/Paragraph/Paragraph';
import Heading from 'Components/Atoms/Heading/Heading';

const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  margin: 20px 5px;
`;

const StyledImg = styled.img`
  max-width:64px;
  max-height:64px;
  margin: 20px;
`;

const StyledContentInfo = styled.div`

`;

const StyledHeading = styled(Heading)`
  padding: 0;
  font-size: 20px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  margin: 5px 0;
  padding: 0;
`;


const SpellContainer = ({ spell, type }) => {



  const costType = type => {
    if (type === "Mana") {
      return "Koszt many: "
    } else if (type === "Energia") {
      return "Koszt energi: "
    } else {
      return null
    }
  }

  spell.description = spell.description.replace(/(<([^>]+)>)/gi, "");
  return (
    <StyledLi>
      <StyledImg src={`/spells/${spell.image.full}`} alt={spell.name} />
      <StyledContentInfo>
        <StyledHeading as="h3">{spell.name}</StyledHeading>
        <StyledParagraph>{spell.description}</StyledParagraph>
        {spell.cost && <StyledParagraph>{costType(type)}{costType(type) ? spell.cost.map(cost => `${cost} / `) : "Umiejętność darmowa"}</StyledParagraph>}
        {/* {spell.cost && <StyledParagraph>Koszt many/energi: {spell.cost.map(cost => `${cost} / `)}</StyledParagraph>} */}
        {spell.range && <StyledParagraph>Zasięg: {spell.range && spell.range.map(range => `${range} / `)}</StyledParagraph>}
        {spell.cooldown && <StyledParagraph>Czas odnowienia: {spell.cooldown && spell.cooldown.map(cd => `${cd} / `)}</StyledParagraph>}
      </StyledContentInfo>
      {/* {spell.cooldown && spell.cooldown.map(cd => `${cd} / `)}{console.log(spell)} */}
    </StyledLi >
  );
}

SpellContainer.propTypes = {
  spell: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.object,
    name: PropTypes.string,
    cost: PropTypes.array,
    range: PropTypes.array,
    cooldown: PropTypes.array,
  })
};

SpellContainer.defaultProps = {

};

export default SpellContainer;