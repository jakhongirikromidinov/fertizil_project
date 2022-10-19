import styled from "styled-components";

const StyledReviews = styled.section`
	.swiper {
		padding-top: 10rem;
		&-slide {
			filter: blur(1px);
			margin-bottom: 10rem;
		}
		&-slide-active {
			transform: scale(1.3);
			transition: 0.6s ease-in-out;
			filter: blur(0);
		}
		&-pagination-bullet {
			background: ${({ male }) =>
				male ? "var(--accent)" : "var(--accent100)"};
		}
		@media screen and (max-width: 1000px) {
			&-slide-active {
				transform: scale(1.2);
				transition: 0.6s ease-in-out;
			}
		}
		@media screen and (max-width: 799px) {
			padding: 0;
			min-height: 25rem;
			&-slide {
				filter: blur(0);
				margin-bottom: 5rem;
			}
			&-slide-active {
				transform: scale(1);
				transition: 0.6s ease-in-out;
			}
		}
	}
`;
export const Content = styled.div`
	h2 {
		padding-top: 10rem;
		color: var(--primary100);
		font-size: 4.8rem;
		span {
			color: ${({ male }) => (male ? "var(--accent)" : "var(--accent100)")};
		}
		@media screen and (max-width: 1100px) {
			font-size: clamp(3rem, 4.5vw, 4.8rem);
		}
		@media screen and (max-width: 800px) {
			margin-bottom: 4rem;
		}
	}
`;

export default StyledReviews;
