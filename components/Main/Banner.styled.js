import styled from "styled-components";

const StyledBanner = styled.section`
	position: relative;
	overflow: hidden;
	color: var(--white);
	padding-top: 17.8rem;
	width: 100%;
	background: radial-gradient(
		circle,
		rgba(0, 191, 244, 1) 5%,
		rgba(36, 63, 204, 1) 100%
	);
	height: 80vh;
`;

export const Content = styled.div`
	@media screen and (min-width: 1441px) {
		padding-top: 7rem;
	}
	@media screen and (max-width: 1100px) {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`;

export const Title = styled.div`
	h1 {
		margin-bottom: 1.5rem;
	}
	@media screen and (min-width: 1441px) {
		max-width: 100%;
		h1 {
			font-size: clamp(6.4rem, 6.3vw, 12rem);
		}
	}
	@media screen and (max-width: 1150px) {
		h1 {
			font-size: clamp(5rem, 5.5vw, 6.4rem);
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
	@media screen and (min-width: 1441px) {
		font-size: clamp(2.1rem, 1.5vw, 2.1rem);
		width: 46%;
	}
	@media screen and (max-width: 1000px) {
		font-size: clamp(1.8rem, 2vw, 2.1rem);
	}
`;
export const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 53rem;
	font-size: 1.4rem;
	margin-bottom: 5rem;
	p {
		line-height: 140%;
	}
	h2 {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}
	@media screen and (min-width: 1441px) {
		max-width: 47%;
		p {
			font-size: clamp(1.4rem, 1.5vw, 1.8rem);
		}
	}
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
	bottom: -74px;
	@media screen and (min-width: 1441px) {
		right: 50px;
	}
	@media screen and (min-width: 1541px) {
		right: 300px;
	}
	@media screen and (max-width: 1261px) {
		right: -70px;
	}
	@media screen and (max-width: 1150px) {
		right: -120px;
	}
	@media screen and (max-width: 1100px) {
		right: 30%;
		transform: translateX(20%);
		bottom: -196px;
	}
	@media screen and (max-width: 950px) {
		bottom: -130px;
	}
	@media screen and (max-width: 750px) {
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
	font-size: 1.6rem;
	border: 0;
	padding: 1em 3.25em;
	border-radius: 10rem;
	background-color: transparent;
	border-radius: 100px;
	border: 1px solid white;
	font-weight: 600;
	:hover {
		background-color: var(--white);
		color: var(--primary100);
		transition: 0.3s ease-in-out;
		cursor: pointer;
	}
`;

export default StyledBanner;
