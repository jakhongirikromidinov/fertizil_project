import styled from "styled-components";

const StyledMainSection = styled.section`
	position: relative;
	overflow: ${({ type }) =>
		type === "male" ? "visible hidden" : "hidden visible"};
	min-height: 100vh;
	.straight {
		display: flex;

		.feature_item_1_descr {
			max-width: 35rem;
		}
		.feature_item_2_descr {
			max-width: 39rem;
		}
		@media screen and (max-width: 900px) {
			.feature_item_1_descr,
			.feature_item_2_descr {
				max-width: 100%;
			}
		}
	}
	.reverse {
		display: flex;
		flex-direction: row-reverse;
		.feature_item_1_descr {
			max-width: 45rem;
		}
		.feature_item_2_descr {
			max-width: 36.5rem;
		}
		@media screen and (max-width: 900px) {
			.feature_item_1_descr,
			.feature_item_2_descr {
				max-width: 100%;
			}
		}
	}
	//making the website responsive
	.straight,
	.reverse {
		@media screen and (max-width: 900px) {
			flex-direction: column;
		}
	}
	// Styling background circles
	// Start line
	.left {
		top: 125px;
		left: 45px;
		@media screen and (max-width: 900px) {
			top: 50px;
			left: -426px;
		}
	}
	.right {
		top: 0px;
		right: -64px;

		@media screen and (max-width: 900px) {
			left: 426px;
			top: 50px;
		}
	}
`;
export const CircleWrapper = styled.div`
	position: absolute;
	z-index: -2;

	@media screen and (max-width: 900px) {
		left: -500px;
	}
`;
// finish line

export const Content = styled.div`
	@media screen and (max-width: 900px) {
	}
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	padding-top: 16rem;
	p {
		color: var(--textdark);
	}
	h2 {
		color: var(--primary100);
	}
	//Changeble h2 and h3 title colors
	.male_accent {
		color: var(--accent);
		font-weight: var(--bold);
	}
	.female_accent {
		color: var(--accent100);
		font-weight: var(--bold);
	}
	.bold {
		font-weight: var(--bold);
	}
	//drop images under Omega 3
	.male_drop {
		position: relative;
		:after {
			content: "";
			display: block;
			position: absolute;
			top: 64px;
			right: -23px;
			width: 250%;
			height: 140%;
			background: url("/images/section_drop.png") center center / cover
				no-repeat;
		}
		@media screen and (max-width: 1439px) {
			:after {
				display: none;
			}
		}
	}
	.female_drop {
		position: relative;
		:after {
			content: "";
			display: block;
			position: absolute;
			top: 62px;
			right: -53px;
			width: 13.4rem;
			height: 18rem;
			background: url("/images/section_female_drop.png") center center / cover
				no-repeat;
			@media screen and (max-width: 1439px) {
				display: none;
			}
		}
	}
`;
//The side that includes images of the package and a description text
export const Left = styled.div`
	position: relative;
	width: 47.5%;
	a {
		color: var(--primary100);
		font-weight: 600;
		font-size: 2.4rem;
		display: flex;
		align-items: center;
		gap: 0.8rem;
		img {
			max-width: 2.5rem;
		}
	}
	@media screen and (max-width: 1115px) {
		a {
			font-size: clamp(2.1rem, 3vw, 3.8rem);
		}
	}

	@media screen and (max-width: 900px) {
		width: 100%;
		a {
			margin-bottom: 7rem;
		}
	}
`;
//Image Wrapper

export const DrugBoxImage = styled.div`
	margin-bottom: 1.6rem;
	transform: translateX(-50px);

	@media screen and (max-width: 900px) {
		margin: 0 auto;
		transform: translateX(0);
		width: 80%;
	}
`;

//Text
export const Text = styled.div`
	max-width: 56rem;
	h2 {
		font-size: 5.6rem;
	}
	div {
		color: var(--primary100);
		font-size: 3.8rem;
		font-weight: var(--bold);
		margin-bottom: 1.4rem;
	}
	p {
		font-size: 2.1rem;
		line-height: 145%;
		margin-bottom: 2rem;
	}
	@media screen and (max-width: 1115px) {
		h2 {
			font-size: clamp(4rem, 4vw, 5.6rem);
		}
		div {
			font-size: clamp(2.3rem, 3vw, 3.8rem);
		}
		p {
			font-size: clamp(1.9rem, 1.5vw, 2.1rem);
		}
	}
	@media screen and (max-width: 900px) {
		h2 {
			font-size: clamp(4rem, 6vw, 5.6rem);
		}
		div {
			font-size: clamp(2.1rem, 3vw, 3.8rem);
		}
	}

	@media screen and (max-width: 900px) {
		max-width: 100%;
	}
`;
//The side that includes a description of features
export const Right = styled.div`
	width: 46.5%;
	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const FeatureItem = styled.div`
	max-width: 57.5rem;
	margin-bottom: 5.5rem;
	h3 {
		color: var(--primary100);
		margin-bottom: 1rem;
		font-weight: 400;
		font-size: 4.8rem;
	}
	p {
		font-size: 1.6rem;
		line-height: 145%;
	}
	ul {
		list-style-type: disc;
		margin-left: 3rem;
		li {
			font-size: 1.6rem;
		}
	}
	@media screen and (max-width: 1265px) {
		h3 {
			font-size: clamp(3rem, 3.4vw, 4.8rem);
		}
	}
	@media screen and (max-width: 900px) {
		max-width: 100%;
		h3 {
			font-size: clamp(2.9rem, 3vw, 4.8rem);
		}
		p {
			font-size: 1.8rem;
		}
		ul {
			padding-left: 20px;
			margin: 0 auto;
			li {
				font-size: 1.8rem;
			}
		}
	}
`;
export const DotsWrapperTop = styled.div`
	position: absolute;
	top: ${({ type }) => (type === "male" ? "0%" : "-8px")};
	left: ${({ type }) => (type === "male" ? "0%" : "-8px")};
	z-index: ${({ type }) => (type === "male" ? "0" : "-1")};
	@media screen and (max-width: 750px) {
		z-index: -1;
	}
`;
export const DotsWrapperBottom = styled.div`
	position: absolute;
	z-index: -1;
	bottom: ${({ type }) => (type === "male" ? "13%" : "57px")};
	right: ${({ type }) => (type === "male" ? "3%" : "5px")};
`;

export default StyledMainSection;
