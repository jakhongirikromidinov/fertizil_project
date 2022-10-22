import styled from "styled-components";

const StyledPageBanner = styled.section`
	position: relative;
	overflow: hidden;
	background: ${({ type }) =>
		type === "male"
			? "radial-gradient(circle, rgba(0, 191, 244, 1) 5%, rgba(36, 63, 204, 1) 100%);"
			: "radial-gradient( circle,rgb(252 85 140 / 97%) 0%,rgba(255,0,153,1) 100% );"};
`;

export const Content = styled.div`
	padding-top: 100px;
	min-height: 680px;
	color: var(--white);
	@media screen and (max-width: 905px) {
		padding-top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		min-height: 500px;
	}
`;
export const Main = styled.div``;

export const PageTitle = styled.h2`
	font-size: 8.4rem;
	padding-top: 11rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 1200px) {
		font-size: clamp(5rem, 7vw, 8.4rem);
	}
	@media screen and (max-width: 905px) {
		padding-top: 5rem;
	}
	@media screen and (max-width: 350px) {
		font-size: 4rem;
		margin-bottom: 2rem;
	}
`;

export const PageBannerDescr = styled.p`
	max-width: 538px;
	font-size: 2.1rem;
	line-height: 150%;
	@media screen and (max-width: 1200px) {
		font-size: clamp(1.8rem, 2vw, 2.1rem);
	}
`;

export const PageBannerImage = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: -120px;
	max-width: 830px;
	width: 100%;
	@media screen and (max-width: 1370px) {
		right: -180px;
	}
	@media screen and (max-width: 1200px) {
		max-width: 700px;
	}
	@media screen and (max-width: 1050px) {
		width: 60%;
	}
	@media screen and (max-width: 905px) {
		display: none;
	}
`;

export default StyledPageBanner;
