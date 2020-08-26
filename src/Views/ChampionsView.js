import React, { useState } from "react";
import styled from "styled-components";
import Card from "Components/Molecules/Card";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import Input from "Components/Atoms/Input/Input";
import { LeagueNames as Names } from "ChampionsNames";

const StyledWrapper = styled.div`
  /* background-color: #f1f1f1; */
  text-align: center;
  min-height: 100vh;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 20px;
`;

const StyledParagraph = styled(Paragraph)`
 padding-bottom: 10px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 50px;
`;

const ChampionsView = () => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledWrapper>
      <Heading>Wyszukaj informacje o swoim ulubionym championie</Heading>
      <StyledParagraph>Wpisz nazwe championa</StyledParagraph>
      <StyledInput
        type="text"
        name="nickname"
        placeholder="np. Teemo"
        value={inputValue}
        onChange={changeInputValue}
      />
      <StyledCardWrapper>
        {Names.map((championName) => (
          <Card
            image={`/avatars/${championName}.png`}
            // image={`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${championName}.png`}
            key={championName}
            name={championName}
            searchValue={inputValue}
          />
        ))}
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default ChampionsView;
