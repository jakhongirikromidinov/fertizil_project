import styled from "styled-components";

export const SwiperWrapper = styled.div`
	width: 100%;
`;

export const SwiperSlideItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.06);
	border-radius: 12px;
	padding: 40px 50px;

	font-size: 16px;
	line-height: 160%;
	p {
		margin-bottom: 20px;
	}
	div {
		font-style: italic;
	}
`;

export const QuoteIcon = styled.div`
	position: absolute;
	top: ${({ top }) => (top ? "5%" : "")};
	left: ${({ top }) => (top ? "3%" : "")};
	bottom: ${({ bottom }) => (bottom ? "5%" : "")};
	right: ${({ bottom }) => (bottom ? "3%" : "")};
	transform: ${({ reverse }) => (reverse ? "scaleX(-1)" : "none")};
`;
