import styled from "styled-components";

const Input = styled.input`
  background-color: #fff5d7;
  border: none;
  width: 30vw;
  height: 40px;
  font-size: 25px;
  text-align: center;
  color: white;
  border-radius: 20px;
  text-shadow: 1px 1px 5px #feb300, -1px -1px 5px #feb300, -1px 0px 5px #feb300,
    -0px -1px 5px #feb300, 0px 1px 5px #feb300, 1px 0px 5px #feb300;

  &::placeholder {
    color: white;
    text-shadow: 1px 1px 5px #feb300, -1px -1px 5px #feb300,
      -1px 0px 5px #feb300, -0px -1px 5px #feb300, 0px 1px 5px #feb300,
      1px 0px 5px #feb300;
  }
`;

export default Input;
