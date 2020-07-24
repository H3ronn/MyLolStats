import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 4px #feb300;
  background-color: #fff5d7;
`;

const StyledUl = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  color: black;
`;

const StyledLi = styled.li`
  width: 60px;
  height: 50px;
  display: block;
  border-radius: 10px;
  margin: 5px;
  box-shadow: 0px 0px 10px 6px #feb300;
  /* background-color: #fff5d7; */
  background-color: white;
  background-image: url("https://img.icons8.com/carbon-copy/100/000000/statistics.png");
  background-size: 100%;
  background-position: center;
  transition: transform 0.5s;

  &:nth-child(2) {
    background-image: url("https://img.icons8.com/wired/64/000000/sword.png");
    background-size: 70%;
    background-repeat: no-repeat;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledNavLink = styled(NavLink)`
  list-style-type: none;
  text-decoration: none;
  display: block;
  color: black;
  width: 100%;
  height: 100%;
  /* background-image: url("https://img.icons8.com/carbon-copy/100/000000/statistics.png"); */

  &:nth-child(2) {
    background-image: url("https://img.icons8.com/wired/64/000000/sword.png");
  }
  &:last-type-of {
    background-image: url("https://img.icons8.com/wired/64/000000/sword.png");
    position: flex;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/search"></StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/"></StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
