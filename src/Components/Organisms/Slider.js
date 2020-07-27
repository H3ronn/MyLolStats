import React, { useEffect } from "react";
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
  width: 20vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  width: 20vw;
`;

const Slider = () => {
  let siema;
  useEffect(() => {
    siema = new Siema();
    console.log(siema.next);
  });

  const next = () => {
    siema.next();
  };

  const prev = () => {
    siema.prev();
  };
  return (
    <StyledWrapper>
      <StyledDiv className="siema">
        <StyledImg src={nekko1} alt="" />
        <StyledImg src={nekko2} alt="" />
        <StyledImg src={nekko3} alt="" />
        <StyledImg src={nekko4} alt="" />
      </StyledDiv>
      <div>
        <Button className="prev" onClick={() => prev()}>
          Prev
        </Button>
        <Button className="next" onClick={() => next()}>
          Next
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default Slider;
