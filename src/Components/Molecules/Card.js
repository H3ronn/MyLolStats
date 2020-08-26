import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin: 20px;
`;

const StyledCardWrapper = styled.button`
  border: none;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-image: url(${({ image }) => `${image}`});
  background-size: 100%;
  box-shadow: 0px 0px 15px 10px #fff5d7;
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  opacity: 0;
  top: 0;
  color: white;
  transition: opacity 0.4s ease, transform 0.4s ease;
  font-weight: bold;
  text-shadow: 1px 1px 5px #feb300, -1px -1px 5px #feb300, -1px 0px 5px #feb300,
    -0px -1px 5px #feb300, 0px 1px 5px #feb300, 1px 0px 5px #feb300;

  ${Wrapper}:hover & {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

const Card = ({ image, name, searchValue }) => {
  const [redirect, setRedirect] = useState(false);

  const viewDetails = () => setRedirect(true);

  if (redirect) {
    return <Redirect to={`/champions/${name.toLowerCase()}`} />;
  }

  if (name.toLowerCase().includes(searchValue.toLowerCase())) {
    return (
      <Wrapper>
        <StyledModal
          onClick={() => {
            alert('elo');
          }}
        >
          Dodaj do ulubionych
        </StyledModal>
        <StyledCardWrapper image={image} onClick={viewDetails} />
      </Wrapper>
    );
  } else {
    return '';
  }
};

export default Card;
