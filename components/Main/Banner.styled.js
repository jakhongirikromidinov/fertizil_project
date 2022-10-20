import styled from "styled-components";

const StyledBanner = styled.section`
	position: relative;
	color: var(--white);
	background: radial-gradient(
		circle,
		rgba(0, 191, 244, 1) 5%,
		rgba(36, 63, 204, 1) 100%
	);
`;

export const Content = styled.div`
	padding-top: 19rem;
	position: relative;
	height: 80vh;
	width: 100%;
	overflow: hidden;
	@media screen and (max-width: 1100px) {
		display: flex;
		overflow: hidden;
		align-items: center;
		flex-direction: column;
	}
	@media screen and (max-width: 1100px) {
		padding-top: 14.5rem;
	}
`;

export const Title = styled.div`
	h1 {
		margin-bottom: 1.5rem;
		font-size: 12rem;
		text-indent: -7px;
		letter-spacing: -3px;
	}
	@media screen and (max-width: 1250px) {
		h1 {
			font-size: clamp(8rem, 9.7vw, 12rem);
		}
	}
	@media screen and (max-width: 1100px) {
		text-align: center;
	}
	@media screen and (max-width: 750px) {
		margin-bottom: 3rem;
	}
`;

export const TitleDescr = styled.p`
	font-size: 2.1rem;
	line-height: 135%;
	max-width: 55rem;
`;
export const Main = styled.div`
	margin-bottom: 5rem;
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
export const MainLeft = styled.div`
	width: 50%;
`;

export const MainRight = styled.div`
	width: 50%;
`;

export const FamilyImage = styled.div`
	position: absolute;
	bottom: -70px;
	right: 110px;
	@media screen and (max-width: 1250px) {
		right: 50px;
	}
	@media screen and (max-width: 1100px) {
		right: 50%;
		transform: translateX(45%);
		bottom: -140px;
	}
	@media screen and (max-width: 1000px) {
		right: 15%;
		transform: translateX(5%);
	}
	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 2em;
	@media screen and (max-width: 1100px) {
		gap: 37rem;
	}
	@media screen and (max-width: 750px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

export const BannerButton = styled.button`
	font-weight: 600;
	background-color: transparent;
	a {
		display: block;
		font-size: 1.6rem;
		border-radius: 10rem;
		padding: 1em 3.25em;
		border: 1px solid white;
		cursor: pointer;
		:hover {
			background-color: var(--white);
			color: var(--primary100);
			transition: 0.3s ease-in-out;
		}
	}
`;

export default StyledBanner;
