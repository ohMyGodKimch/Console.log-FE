import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => {
    switch (variant) {
      case "login":
        return css`
          width: 100px;
          height: 50px;
        `;
      default:
        break;
    }
  }}
`;
