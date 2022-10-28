import styled, { css } from "styled-components";

export const Input = styled.div`
  box-sizing: border-box;
  background-color: ${({ bgc }) => (bgc ? bgc : "")};
  width: ${({ width }) => (width ? width : "")};
  padding: ${({ pd }) => (pd ? pd : "")};
  height: ${({ height }) => (height ? height : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};

  ${({ variant }) => {
    switch (variant) {
      case "login-post-box":
        return css`
          width: 500px;
        `;
      default:
        break;
    }
  }}
`;
