import styled from "styled-components";

const StyledBanner = styled.section`
	position: relative;
	color: var(--white);
	overflow: hidden;
	background: ${({ icons }) =>
		icons
			? 'url("/images/banner_sperm.png") center right -100px / contain no-repeat, var(--backgroundGradient);'
			: "var(--backgroundGradient)"};
	@media screen and (max-width: 1250px) {
		background-position: center right -150px, 0;
	}
	@media screen and (max-width: 1100px) {
		background: var(--backgroundGradient);
	}
`;

export const Content = styled.div`
	padding-top: 19rem;
	/* position: relative; */
	height: 100vh;
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
		font-size: 13.8rem;
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
	max-width: 45rem;
	margin-bottom: 6rem;
	position: relative;
	::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: -20px;
		left: 0;
		background: var(--white);
	}
`;
export const Main = styled.div`
	margin-bottom: 5rem;
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
export const MainFeature = styled.div`
	max-width: 41.3rem;
	margin-bottom: 7.3rem;
	h3 {
		font-size: 3.2rem;
		font-weight: 600;
		margin-bottom: 1.6rem;
	}
	p {
		font-size: 1.8rem;
	}
	@media screen and (max-width: 1100px) {
		text-align: center;
	}
`;

export const FamilyImage = styled.div`
	position: absolute;
	bottom: -70px;
	right: -4px;
	z-index: 1;
	pointer-events: none;
	@media screen and (max-width: 1300px) {
		right: -100px;
	}
	@media screen and (max-height: 719px) {
		bottom: -250px;
	}
	@media screen and (max-width: 1160px) {
		right: -160px;
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
export const ImageWrapper = styled.div`
	width: 1021px;
	height: 922px;
	position: relative;
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
		font-size: 1.8rem;
		border-radius: 2.4rem;
		padding: 0.8em 2em;
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
