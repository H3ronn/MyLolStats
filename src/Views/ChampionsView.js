import React, { useState } from 'react';
import styled from 'styled-components';
import ChampionsViewTemplate from 'Templates/ChampionsViewTemplate';
import Card from 'Components/Molecules/Card';
import Heading from 'Components/Atoms/Heading/Heading';
import Paragraph from 'Components/Atoms/Paragraph/Paragraph';
import Input from 'Components/Atoms/Input/Input';
import { LeagueNames as Names } from 'ChampionsNames';

const ChampionsView = () => {
  return <ChampionsViewTemplate />;
};

export default ChampionsView;
