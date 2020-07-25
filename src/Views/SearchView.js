import React from "react";
import styled from "styled-components";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import Input from "Components/Atoms/Input/Input";

const StyledWrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
`;

const SearchView = () => {
  return (
    <StyledWrapper>
      <Heading>Sprawdz swoje statystki w grze League of legends</Heading>
      <Paragraph>Wpisz swoją nazwę z gry</Paragraph>
      <Input type="text" name="nickname" placeholder="Twój nick" />
    </StyledWrapper>
  );
};

export default SearchView;
