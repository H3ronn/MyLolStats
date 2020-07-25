import React, { useState } from "react";
import styled from "styled-components";
import Card from "Components/Molecules/Card";
import Neeko from "Assets/champions/Neeko.png";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import Input from "Components/Atoms/Input/Input";
import { LeagueNames as Names } from "ChampionsNames";

console.log(Names);

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

const StyledInput = styled(Input)`
  margin-bottom: 50px;
`;

const ChampionsView = () => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <StyledWrapper>
      <Heading>Wyszukaj informacje o swoim ulubionym championie</Heading>
      <Paragraph>Wpisz nazwe championa</Paragraph>
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
            image={`/champions/${championName}.png`}
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
