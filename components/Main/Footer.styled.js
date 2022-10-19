import styled from "styled-components";
import { BsInstagram, BsTelegram, BsFacebook } from "react-icons/bs";

const StyledFooter = styled.footer`
	min-height: 42rem;
	position: relative;
	padding: 0 5rem;
	margin-top: 16rem;
	@media screen and (max-width: 800px) {
		padding: 0 1rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;
	gap: 15.5rem;
	h3 {
		font-size: 2.1rem;
		margin-bottom: 2.1rem;
	}
	ul {
		font-size: 1.8rem;
		li {
			margin-bottom: 1.5rem;
		}
	}
	@media screen and (max-width: 1100px) {
		gap: 0;
		justify-content: space-between;
	}
	@media screen and (max-width: 800px) {
		flex-direction: column;
		text-align: left;
		gap: 3rem;
		ul {
			display: flex;
			flex-direction: column;
			align-items: left;
		}
	}
`;

export const Company = styled.div`
	width: 25%;
	font-size: 1.4rem;
	@media screen and (max-width: 1100px) {
		width: 30%;
	}
	@media screen and (max-width: 1032px) {
		width: 35%;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}
	@media screen and (max-width: 971px) {
		width: 30%;
	}
	@media screen and (max-width: 800px) {
		width: 100%;
		align-items: center;
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 3.6rem;
	font-size: 3.2rem;
`;

export const InstagramLogo = styled(BsInstagram)``;
export const TelegramLogo = styled(BsTelegram)``;
export const FacebookLogo = styled(BsFacebook)``;

export const CompanyDescr = styled.p`
	margin-top: 1.8rem;
	margin-bottom: 4.4rem;
	@media screen and (max-width: 1032px) {
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export const Useful = styled.div`
	@media screen and (max-width: 1100px) {
		width: 25%;
	}
	@media screen and (max-width: 971px) {
		width: 30%;
	}
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const Contacts = styled.div`
	@media screen and (max-width: 1100px) {
		width: 20%;
	}
	@media screen and (max-width: 971px) {
		width: 25%;
	}
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const CircleWrapper = styled.div`
	max-width: 89.4rem;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: -2;
	img {
		width: 100%;
	}
`;

export default StyledFooter;
