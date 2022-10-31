import styled, { css } from "styled-components";

export const Image = styled.img`
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	border-radius: ${({ bd }) => (bd ? bd : "")};

	${({ variant }) => {
		switch (variant) {
			case "main-nav-profile":
				return css`
					display: block;
					height: 2.5rem;
					width: 2.5rem;
					border-radius: 50%;
					object-fit: cover;
					cursor: pointer;
				`;
			case "main-item-profile":
				return css`
					object-fit: cover;
					border-radius: 50%;
					width: 1.5rem;
					height: 1.5rem;
					display: block;
					margin-right: 0.5rem;
				`;
			case "main-item":
				return css`
					width: 100%;
					height: 167px;
				`;
			case "join":
				return css`
					width: 100%;
					height: 167px;
				`;
			default:
				break;
		}
	}}
`;
