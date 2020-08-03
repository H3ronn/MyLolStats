import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';

const StyledAll = styled.div`
   max-height: 90vh;
   padding: 0;
`;

const StyledWapper = styled.div`
  width: 335px;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
`;

const SimpleSlider = () => {

  var settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    centerPadding: "20px"

  }
  return (
    <StyledAll>

      <StyledWapper>
        <Slider {...settings}>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_1.jpg" />
            </StyledImgContainer>
          </div>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_0.jpg" />
            </StyledImgContainer>
          </div>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_2.jpg" />
            </StyledImgContainer>
          </div>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_3.jpg" />
            </StyledImgContainer>
          </div>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_4.jpg" />
            </StyledImgContainer>
          </div>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_5.jpg" />
            </StyledImgContainer>
          </div>
        </Slider >
      </StyledWapper>
    </StyledAll>
  );
}


export default SimpleSlider;