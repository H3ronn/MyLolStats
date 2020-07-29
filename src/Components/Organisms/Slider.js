import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Siema from "siema";
import Button from "Components/Atoms/Button/Button";
import nekko1 from "Assets/Neeko_0.jpg";
import nekko2 from "Assets/Neeko_1.jpg";
import nekko3 from "Assets/Neeko_2.jpg";
import nekko4 from "Assets/Neeko_3.jpg";

const StyledImg = styled.img`
  width: 100%;
`;

const StyledWrapper = styled.div`
  /* width: 20vw; */
  display: flex;
  align-items: center;
  /* flex-direction: column; */
`;

const StyledDiv = styled.div`
  width: 355px;
  max-height: calc(100vh - 80px);
  background-color: #fff5d7;
  box-shadow: 0px 0px 10px 4px #fff5d7;
`;

const Slider = ({ skins, name }) => {
  const [siema, setSiema] = useState({});
  useEffect(() => {
    setSiema(new Siema());
  }, []);

  const next = () => {
    siema.next();
  };

  const prev = () => {
    siema.prev();
  };
  return (
    <StyledWrapper>
      {console.log(Array.isArray(skins))}
      <Button className="prev" onClick={() => prev()}>
        &larr;
      </Button>
      <StyledDiv className="siema">
        {/* {Array.isArray(skins) && skins.map(skin => (
          <StyledImg src={`/champions/${name}_${skin.num}.jpg`} key={skin.num} alt="" />
        ))} */}
        {/* {() => {
          return (
            <>
              <StyledImg src="/champions/Neeko_0.jpg" alt="" />
              <StyledImg src={nekko2} alt="" />
              <StyledImg src={nekko3} alt="" />
              <StyledImg src={nekko4} alt="" />
            </>
          )
        }} */}
        <StyledImg src="/champions/Neeko_0.jpg" alt="" />
        <StyledImg src={nekko2} alt="" />
        <StyledImg src={nekko3} alt="" />
        <StyledImg src={nekko4} alt="" />
      </StyledDiv>
      <Button className="next" onClick={() => next()}>
        &rarr;
      </Button>
    </StyledWrapper>
  );
};

export default Slider;
