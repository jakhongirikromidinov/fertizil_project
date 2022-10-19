import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1320px;
	width: 95%;
`;

export const Circle5 = styled.div`
	overflow-x: hidden;
	width: 894px;
	height: 894px;
	border: 10px solid #fafafa;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		border: 10px solid #fafafa;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
export const Circle4 = styled.div`
	width: 750px;
	height: 750px;
`;
export const Circle3 = styled.div`
	width: 660px;
	height: 660px;
`;
export const Circle2 = styled.div`
	width: 571px;
	height: 571px;
`;
export const Circle1 = styled.div`
	width: 505px;
	height: 505px;
`;
export const Logo = styled.div`
	@media screen and (max-width: 1200px) {
		width: 200px;
	}
	@media screen and (max-width: 1000px) {
		width: 140px;
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
`;
export const LogoOriginal = styled.div`
	display: none;
	@media screen and (max-width: 1000px) {
		width: 140px;
	}
	@media screen and (max-width: 800px) {
		display: block;
		align-self: flex-start;
	}
`;

export const BurgerMenu = styled.div`
	position: fixed;
	overflow: hidden;
	z-index: 4;
	margin-top: 8.8rem;
	width: 100%;
	height: 100vh;
	background: #ffff;
	top: 0;
	transition: 0.5s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	color: var(--deepblue);
`;
export const Icon = styled.div`
	position: absolute;
	top: 50px;
	right: 9px;
	color: white;
`;

export const BurgerMenuList = styled.ul`
	width: 100%;
	height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 3rem;
	li {
		margin-top: 1rem;
	}
`;
export const StyledDots = styled.div`
	width: 98px;
	display: flex;
	flex-wrap: wrap;
	span {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		margin: 3.5px;
		background-color: ${({ male }) =>
			male ? "var(--accent)" : "var(--accent100)"};
	}
	.femaleDots {
		background-color: var(--pinkprimary);
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.99);
	display: flex;
	align-items: center;
`;
export const ImageWrapper = styled.div`
	position: relative;
	margin: 0 auto;
	width: 60%;
	height: 80%;
	box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`;

export const CloseIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 999;
	cursor: pointer;
	svg {
		fill: white;
		font-size: 32px;
	}
`;
