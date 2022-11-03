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
			case "mypage-image":
				return css`
					display: block;
					width: 8rem;
					height: 8rem;
					border-radius: 50%;
					object-fit: cover;
					box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
				`;
			case "profile":
				return css`
					border-radius: 50%;
					width: 3.375rem;
					height: 3.375rem;
					display: block;
					border-radius: 50%;
					object-fit: cover;
				`;
			case "image-box":
				return css`
					max-height: 100vh;
					max-width: 100%;
					width: auto;
					margin: 2rem auto 0px;
					height: auto;
					object-fit: contain;
					display: block;
				`;
			case "user-info-image-box":
				return css`
					box-sizing: border-box;
				`;
			default:
				break;
		}
	}}
`;
