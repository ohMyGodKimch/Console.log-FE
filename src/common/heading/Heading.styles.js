import styled, { css } from "styled-components";

export const FirstHeading = styled.h1`
  ${({ variant }) => {
    switch (variant) {
      case "main-header":
        return css`
          width: 100px;
          height: 100px;
          background-color: azure;
        `;
      default:
        break;
    }
  }}
`;

export const SecondHeading = styled.h2`
  ${({ variant }) => {
    switch (variant) {
      case "main-header":
        return css`
          width: 100px;
          height: 100px;
          background-color: azure;
        `;
      default:
        break;
    }
  }}
`;

export const ThirdHeading = styled.h3`
  ${({ variant }) => {
    switch (variant) {
      case "main-header":
        return css`
          width: 100px;
          height: 100px;
          background-color: azure;
        `;
      default:
        break;
    }
  }}
`;
