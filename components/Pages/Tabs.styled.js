import styled from "styled-components";
import { MaleTabsData } from "../../data/data";

const StyledTabs = styled.section`
	position: relative;
	overflow: hidden;
`;

export const Content = styled.div`
	padding-top: 10rem;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	h2 {
		color: var(--primary100);
		font-size: 4.8rem;
		margin-bottom: 4rem;
		span {
			color: ${({ type }) =>
				type === "male" ? "var(--accent)" : "var(--accent100)"};
		}
		@media screen and (max-width: 1100px) {
			font-size: clamp(3rem, 4.5vw, 4.8rem);
		}
	}
	@media screen and (max-width: 800px) {
		min-height: 90vh;
	}
`;

export const TabsContainer = styled.div``;

export const TabsBlock = styled.div`
	background: rgba(245, 245, 247, 0.6);
	display: flex;
	justify-content: space-between;
	border-radius: 8px;
	width: 1120px;
	max-width: 100%;
	.tab_active {
		color: ${({ type }) =>
			type === "male" ? "var(--accent)" : "var(--accent100)"};
		transition: 0.3s ease-in-out;
		border-color: ${({ type }) =>
			type === "male" ? "var(--accent)" : "var(--accent100)"};
		path {
			fill: ${({ type }) =>
				type === "male" ? "var(--accent)" : "var(--accent100)"};
			transition: 0.2s ease-in-out;
		}
		&:after {
			content: "";
			display: block;
			width: 75%;
			height: 6px;
			background: ${({ type }) =>
				type === "male" ? "var(--accent)" : "var(--accent100)"};
			border-radius: 4px 4px 0 0;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-47%);
		}
	}
	@media screen and (max-width: 800px) {
		justify-content: space-around;
	}
`;

export const TabsButton = styled.button`
	position: relative;
	display: flex;
	background: transparent;
	align-items: center;
	gap: 1.2rem;
	padding: 2rem 3rem;
	font-size: 1.6rem;
	cursor: pointer;

	:hover {
		transform: scale(1.1);
		transition: 0.2s ease-in-out;
		color: ${({ type }) =>
			type === "male" ? "var(--accent)" : "var(--accent100)"};
		.tab_hovered {
			path {
				fill: ${({ type }) =>
					type === "male" ? "var(--accent)" : "var(--accent100)"};
				transition: 0.2s ease-in-out;
			}
		}
	}
	@media screen and (max-width: 1122px) {
		padding: 2rem 2rem;
	}
	@media screen and (max-width: 800px) {
		border: 1px solid var(--black);
		border-radius: 8px;
		span {
			display: none;
		}
	}
`;

export const ContentContainer = styled.div`
	.active {
		display: block;
	}
`;

export const ContentBlock = styled.div`
	display: none;
	padding-top: 10rem;
	h3 {
		color: var(--primary100);
		font-size: 2.4rem;
		margin-bottom: 3.1rem;
	}
	ul {
		max-width: 63.2rem;
		margin-left: 2.4rem;
	}
	li {
		list-style-type: disc;
		font-size: 1.8rem;
		line-height: 150%;
		margin-bottom: 1rem;
	}
	@media screen and (max-width: 800px) {
		padding-top: 5rem;
	}
`;

export const DrugImageWrapper = styled.div`
	position: absolute;
	top: 277px;
	right: 198px;
	z-index: -1;
	@media screen and (max-width: 1000px) {
		right: 0;
	}
	@media screen and (max-width: 800px) {
		img {
			opacity: 0.3;
		}
	}
`;

export const Quote = styled.p`
	margin-top: auto;
`;

export default StyledTabs;
