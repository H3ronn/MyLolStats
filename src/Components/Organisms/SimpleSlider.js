import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';

const StyledAll = styled.div`
   max-height: 90vh;
   padding: 0;
`;

const StyledWapper = styled.div`
  /* width: 670px; */
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
  flex-direction: column;
  width: 335px;
`;

const StyledLabel = styled.label`
  color: white;
  text-shadow: 0px 0px 10px black;
  padding: 5px;
`;

const SimpleSlider = ({ skins, championId }) => {
  // const [skinNumbers, setSkinNumbers] = useState(skins.num);
  // console.log(skinNumbers)



  const settings = {
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
              <StyledImg src={`/champions/${championId}_0.jpg`} />
              <StyledLabel>Podstawowy</StyledLabel>
            </StyledImgContainer>
          </div>

          {skins && skins.map(skin => {
            //Takie obejcie bo slider zaczynał od ostatniego elementu zamiast od pierwszego
            if (skin.num === 0) return
            console.log(championId)
            return (
              <div>
                <StyledImgContainer>
                  <StyledImg src={`/champions/${championId}_${skin.num}.jpg`} />
                  <StyledLabel>{skin.name}</StyledLabel>
                </StyledImgContainer>
              </div>
            )
          })}

          {/* <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_0.jpg" />
            </StyledImgContainer>
          </div>
          <div>
            <StyledImgContainer>
              <StyledImg src="/champions/Ahri_1.jpg" />
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
          </div> */}
        </Slider >
      </StyledWapper>
    </StyledAll >
  );
}


export default SimpleSlider;