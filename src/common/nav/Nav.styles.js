import styled, { css } from "styled-components";

export const Nav = styled.box`
  display: flex;
  background-color: ${({ bgc }) => (bgc ? bgc : "")};
  width: ${({ width }) => (width ? width : "")};
  border: ${({ border }) => (border ? border : "")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : ""};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  height: ${({ height }) => (height ? height : "")};

  ${({ variant }) => {
    switch (variant) {
      case "main-post-box":
        return css`
          background-color: aliceblue;
        `;
      default:
        break;
    }
  }}
`;
