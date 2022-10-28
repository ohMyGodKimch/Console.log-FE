import styled, { css } from "styled-components";

export const Box = styled.div`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};

	${({ variant }) => {
		switch (variant) {
			case "main-post-box":
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
