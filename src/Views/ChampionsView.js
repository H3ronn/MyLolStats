import React from "react";
import styled from "styled-components";
import Card from "../Components/Molecules/Card";
import Neeko from "../Assets/champions/Neeko.png";

const StyledWrapper = styled.div`
  /* background-color: #f1f1f1; */
  text-align: center;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 100px;
`;

const StyledH1 = styled.h1`
  color: white;
  text-shadow: 0px 0px 15px black;
  font-size: 40px;
  padding: 30px 0;
`;

const StyledP = styled.p`
  color: white;
  padding: 0 0 30px;
  text-shadow: 0px 0px 15px black;
  font-size: 30px;
`;

const StyledInput = styled.input`
  background-color: #fff5d7;
  border: none;
  width: 50vw;
  height: 35px;
  font-size: 25px;
  text-align: center;
  color: white;
  border-radius: 20px;
  text-shadow: 0px 0px 15px black;
  margin-bottom: 50px;
`;

const ChampionsView = () => {
  return (
    <StyledWrapper>
      <StyledH1>Wyszukaj informacje o swoim ulubionym championie</StyledH1>
      <StyledP>Wpisz nazwe championa</StyledP>
      <StyledInput type="text" name="nickname" />
      <StyledCardWrapper>
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
        <Card image={Neeko} />
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default ChampionsView;
