import React from "react";
import Navigation from "../Components/Organisms/Navigation";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 80px;
  background-color: #feb300;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Navigation />
      {children}
    </StyledWrapper>
  );
};

export default MainTemplate;
