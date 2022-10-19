import styled from "styled-components";

const StyledPageBanner = styled.section`
	position: relative;
	overflow: hidden;
	background: ${({ type }) => type === "male" ? "linear-gradient(265.86deg, #A0CDDC -27.21%, #007EBB 53.23%);" : "linear-gradient(265.86deg, #f993d1 -27.21%, #ed2291 53.23%);"}
`;

export const Content = styled.div`
	padding-top: 100px;
	min-height: 680px;
	color: var(--white);
	@media screen and (max-width: 905px) {
		display: flex;
		justify-content: center;
		padding-top: 140px;
	}
`;
export const Main = styled.div``;

export const PageTitle = styled.h2`
	font-size: 8.4rem;
	padding-top: 11rem;
	@media screen and (max-width: 1200px) {
		font-size: clamp(5rem, 7vw, 8.4rem);
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
