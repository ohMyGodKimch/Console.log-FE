import styled, { css } from "styled-components";

export const DataList = styled.dl`
	${({ variant }) => {
		switch (variant) {
			case "main-item":
				return css`
					display: block;
					width: 75px;
					height: 18px;
				`;
			default:
				break;
		}
	}}
`;

export const DataTerm = styled.dt`
	${({ variant }) => {
		switch (variant) {
			case "main-item":
				return css`
					display: inline;
					color: #878f97;
					font-weight: 300;
					font-size: 12px;
				`;
			default:
				break;
		}
	}}
`;

export const DataDisc = styled.dd`
	${({ variant }) => {
		switch (variant) {
			case "main-item":
				return css`
					display: inline;
					font-size: 13px;
					font-weight: 600;
				`;
			default:
				break;
		}
	}}
`;
