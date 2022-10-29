import styled, { css } from "styled-components";

export const TextArea = styled.textarea`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	height: ${({ height }) => (height ? height : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "")};
	font-weight: ${({ fontWeigth }) => (fontWeigth ? fontWeigth : "")};

	${({ variant }) => {
		switch (variant) {
			case "main-post":
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
