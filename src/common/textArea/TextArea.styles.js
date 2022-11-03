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
			case "comment-input":
				return css`
					resize: none;
					padding: 1rem 1rem 1.5rem;
					outline: none;
					border: 1px solid #f1f3f5;
					margin-bottom: 1.5rem;
					width: 100%;
					border-radius: 4px;
					min-height: 6.125rem;
					font-size: 1rem;
					line-height: 1.75;
					height: 70px;
				`;
			case "comment-button-wrap":
				return css`
					resize: none;
					padding: 1rem 1rem 1.5rem;
					outline: none;
					border: 1px solid #f1f3f5;
					margin-bottom: 1.5rem;
					width: 100%;
					border-radius: 4px;
					min-height: 6.125rem;
					font-size: 1rem;
					line-height: 1.75;
					height: 70px;
				`;

			default:
				break;
		}
	}}
`;
