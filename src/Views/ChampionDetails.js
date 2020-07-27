import React from "react";
import styled from "styled-components";
import Heading from "Components/Atoms/Heading/Heading";
import Paragraph from "Components/Atoms/Paragraph/Paragraph";
import nekko from "Assets/Neeko_0.jpg";
import Slider from "Components/Organisms/Slider";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperWrapper = styled.div`
  display: flex;
`;

const ChampionDetails = () => {
  return (
    <StyledWrapper>
      <Heading>Nekko</Heading>
      <Slider />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et hunc idem
        dico, inquieta sed ad virtutes et ad vitia nihil interesse. Itaque
        nostrum est-quod nostrum dico, artis est-ad ea principia, quae
        accepimus. Quod, inquit, quamquam voluptatibus quibusdam est saepe
        iucundius, tamen expetitur propter voluptatem. Esse enim quam vellet
        iniquus iustus poterat inpune. Duo Reges: constructio interrete. Non
        quam nostram quidem, inquit Pomponius iocans; Itaque eos id agere, ut a
        se dolores, morbos, debilitates repellant. Sint modo partes vitae
        beatae. Perge porro; Sin tantum modo ad indicia veteris memoriae
        cognoscenda, curiosorum.
      </Paragraph>
    </StyledWrapper>
  );
};

export default ChampionDetails;
