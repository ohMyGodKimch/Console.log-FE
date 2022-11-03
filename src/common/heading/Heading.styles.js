import styled, { css } from "styled-components";

export const FirstHeading = styled.h1`
	${({ variant }) => {
		switch (variant) {
			case "main-header":
				return css`
					cursor: pointer;
				`;
			case "join":
				return css`
					font-size: 21px;
					font-weight: 600;
					letter-spacing: 0.05em;
				`;
			default:
				break;
		}
	}}
`;

export const SecondHeading = styled.h2`
	${({ variant }) => {
		switch (variant) {
			case "main-header":
				return css`
					width: 100px;
					height: 100px;
					background-color: azure;
				`;
			case "item-header":
				return css`
					font-size: 1rem;
					font-weight: 600;
					margin: 0px 0px 0.25rem;
					line-height: 1.5;
					word-break: break-word;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				`;
			case "comment-header":
				return css`
					font-size: 1.125rem;
					line-height: 1.5;
					font-weight: 600;
					margin-bottom: 1rem;
				`;
			default:
				break;
		}
	}}
`;

export const ThirdHeading = styled.h3`
	${({ variant }) => {
		switch (variant) {
			case "main-header":
				return css`
					width: 100px;
					height: 100px;
					background-color: azure;
				`;
			default:
				break;
		}
	}}
`;
