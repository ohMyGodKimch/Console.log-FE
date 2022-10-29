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
			default:
				break;
		}
	}}
`;
