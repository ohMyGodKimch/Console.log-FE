import styled, { css } from "styled-components";

export const Nav = styled.nav`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	border: ${({ border }) => (border ? border : "")};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
	height: ${({ height }) => (height ? height : "")};

	${({ variant }) => {
		switch (variant) {
			case "main-nav-box":
				return css`
					height: 64px;
				`;
			default:
				break;
		}
	}}
`;
