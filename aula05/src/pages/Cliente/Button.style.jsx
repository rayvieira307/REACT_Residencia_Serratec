
import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 60px;

  &:hover {
    background-color: green;
  }
`;

export const RedButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: red;
  &:hover {
    background-color: blue;
  }
`;

export const BlueButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: orange;
  &:hover {
    background-color: gray;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => (props.active ? "yellow" : "blue")};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;
