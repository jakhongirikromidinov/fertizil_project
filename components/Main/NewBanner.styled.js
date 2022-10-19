import styled from "styled-components";

const StyledBanner = styled.section`
	position: absolute;
	left: 0;
	top: 0;
	height: 80vh;
	width: 100%;
	z-index: -1;
	background: rgb(0, 191, 244);
	background: radial-gradient(
		circle,
		rgba(0, 191, 244, 1) 5%,
		rgba(36, 63, 204, 1) 100%
	);
	color: white;
`;

export const Row = styled.div`
	:nth-of-type(1) {
		height: inherit;
		display: flex;
		flex-flow: column;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	:nth-of-type(2) {
	}
`;

export const Main = styled.div`
	padding-top: 3em;

	h1 {
		font-size: 12rem;
		text-transform: uppercase;
		text-indent: -7px;
		line-height: 1.1;
	}

	p {
		font-size: 2rem;
		max-width: 42ch;
		margin-bottom: 2em;
		line-height: 1.25;
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 2em;

	button {
		border: 0;
		padding: 1em 3.25em;
		border-radius: 10rem;

		:nth-of-type(1) {
			background: white;
			color: black;
		}

		:nth-of-type(2) {
			background: transparent;
			color: white;
			border: 1px solid white;
		}
	}
`;

export const Family = styled.div`
	position: absolute;
	right: -7.5rem;
	bottom: -12rem;
	max-width: 83rem;
`;

export const StyledFeatures = styled.ul`
	list-style: none;
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 75%;
	transform: translateX(-50%) translateY(60%);
	box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.25);
	border: 1px solid #eee;
	border-radius: 1rem;
	display: flex;
	background: rgba(255, 255, 255, 0.95);

	li {
		color: black;
		padding: 1.5em;

		svg {
			font-size: 4.5rem;
			margin-bottom: 1.5rem;
		}

		h3 {
			margin-bottom: 0.5em;
		}

		p {
			line-height: 1.4;
			color: #777;
		}
	}
`;

export default StyledBanner;
