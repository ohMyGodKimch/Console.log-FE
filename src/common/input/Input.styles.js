import styled, { css } from "styled-components";

export const Input = styled.input`
	box-sizing: border-box;
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};

	${({ variant }) => {
		switch (variant) {
			case "login-post-box":
				return css`
					width: 500px;
					height: 100px;
					background-color: beige;
				`;
			default:
				break;
		}
	}}
`;
