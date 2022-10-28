import styled, { css } from "styled-components";

export const Text = styled.div`
  background-color: ${({ bgc }) => (bgc ? bgc : "")};
  width: ${({ width }) => (width ? width : "")};
  padding: ${({ pd }) => (pd ? pd : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};

  ${({ variant }) => {
    switch (variant) {
      case "main-post-div":
        return css`
          width: 500px;
          height: 500px;
          background-color: aliceblue;
        `;
      default:
        break;
    }
  }}
`;
