import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style-type: none;
  display: block;
`;

const SpellContainer = ({ passive = null, spell }) => (
  <StyledLi><img src={`/spells/${spell.image.full}`} />{spell.description}{spell.cooldown && spell.cooldown.map(cd => `${cd} / `)}{console.log(spell)}</StyledLi>
);

export default SpellContainer;