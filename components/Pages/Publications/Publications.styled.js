import styled from "styled-components";

const StyledPublications = styled.section`
	.swiper {
		padding-top: 5rem;
		/* min-height: 85rem; */
		&-slide {
			filter: blur(1px);
			margin-bottom: 10rem;
		}
		&-slide-active {
			transform: scale(1.2);
			transition: 0.6s ease-in-out;
			filter: blur(0);
		}
		&-pagination-bullet {
			background: ${({ male }) =>
				male ? "var(--accent)" : "var(--accent100)"};
		}
		@media screen and (max-width: 600px) {
			.swiper {
				&-slide {
					margin-bottom: 8rem;
				}
			}
		}
	}
`;

export const Content = styled.div``;
export const Title = styled.h2`
	padding-top: 10rem;
	color: var(--primary100);
	font-size: 4.8rem;
	margin-bottom: 4rem;
	span {
		color: ${({ male }) => (male ? "var(--accent)" : "var(--accent100)")};
	}
	@media screen and (max-width: 1100px) {
		font-size: clamp(3rem, 4.5vw, 4.8rem);
	}
`;

export const PublicationImage = styled.div`
	display: flex;
	gap: 7rem;
	cursor: pointer;
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
export const PublicationSliderWrapper = styled.div`
	display: none;
	@media screen and (max-width: 1000px) {
		display: block;
	}
`;

export default StyledPublications;
