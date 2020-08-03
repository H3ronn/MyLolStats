import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
 0%{
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    opacity: 0;
    transform: translateX(-50px) scale(1);
  }

  50% {
    box-shadow: 0 20px 50px rgba(0,0,0,.5);
    opacity: 1;
    transform: translateX(0px) scale(1.2);
  }

  100% {
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    opacity: 0;
    transform: translateX(50px) scale(1);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px) ;
  background: #feb300;
  
`;

const StyledLoader = styled.div`
  position: relative;
  display: flex;

  span {
    width: 50px;
    height: 300px;
    margin: 0 20px;
    background: #fff5d7;
    opacity: 0;
    animation: ${animate} 1.4s linear infinite;


    &:nth-child(1){
      animation-delay: 0s;
    }
    &:nth-child(2){
      animation-delay: 0.2s;
    }
    &:nth-child(3){
      animation-delay: 0.4s;
    }
    &:nth-child(4){
      animation-delay: 0.6s;
    }
    &:nth-child(5){
      animation-delay: 0.8s;
    }
    &:nth-child(6){
      animation-delay: 1s;
    }
    &:nth-child(7){
      animation-delay: 1.2s;
    }
  }
`;

const LoadingPage = () => (
  <StyledWrapper>
    <StyledLoader>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledLoader>
  </StyledWrapper>
);
export default LoadingPage;
