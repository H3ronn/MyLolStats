import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: #f1f1f1;
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  background-image: url(${({ image }) => `${image}`});
  background-size: 100%;
  box-shadow: 0px 0px 15px 10px #fff5d7;
`;

const Card = ({ image }) => {
  const [redirect, setRedirect] = useState(false);

  const viewDetails = () => setRedirect(true);

  if (redirect) {
    return <Redirect to="/champions/champName" />;
  }

  return <StyledWrapper image={image} onClick={viewDetails}></StyledWrapper>;
};

export default Card;
