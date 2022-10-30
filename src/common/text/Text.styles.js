import styled, { css } from "styled-components";

export const Text = styled.p`
	display: ${({ dp }) => (dp ? dp : "")};
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};

	${({ variant }) => {
		switch (variant) {
			case "main-new":
				return css`
					font-size: 18px;
					font-weight: 600;
					letter-spacing: 0.06em;
				`;
			case "main-item-content":
				return css`
					word-break: break-word;
					overflow-wrap: break-word;
					font-size: 14px;
					line-height: 1.5;
					height: 4rem;
					overflow: hidden;
					text-overflow: ellipsis;
					color: #495057;
				`;
			default:
				break;
		}
	}}
`;
