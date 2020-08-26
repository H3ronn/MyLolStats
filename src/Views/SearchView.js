import React from "react";
import styled from "styled-components";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import Input from "Components/Atoms/Input/Input";
import Button from "Components/Atoms/Button/Button";
import axios from "axios";

const StyledWrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 0 20px;
`;

const SearchView = () => {
  // const TeemoJS = require("teemojs");
  // let api = TeemoJS("RGAPI-7ae9021d-98e9-48d3-b23a-8d65e6e0abd5");

  // api
  //   .get("eun1", "summoner.getBySummonerName", "h3ron")
  //   .then((data) =>
  //     console.log(data.name + "'s summoner id is " + data.id + ".")
  //   )
  //   .catch((err) => console.log(err));

  const apiTest = () => {
    // console.log("strzał do api");
    // axios
    //   .get(
    //     "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json"
    //   )
    //   .then((result) => {
    //     console.log("result");
    //     console.log(result);
    //     console.log("result");
    //   })
    //   .catch((err) => {
    //     console.log("err");
    //     console.log(err);
    //     alert(err);
    //     console.log("err");
    //   });
  };

  return (
    <StyledWrapper>
      <Heading>Sprawdz swoje statystki w grze League of legends</Heading>
      <StyledParagraph>Wpisz swoją nazwę z gry</StyledParagraph>
      <Input type="text" name="nickname" disabled placeholder="Twój nick" />
      <Button>Wyszukaj</Button>
      {() => setTimeout(() => alert("Funkcja będzie dostępna w przyszłości"), 100)}
    </StyledWrapper>
  );
};

export default SearchView;
