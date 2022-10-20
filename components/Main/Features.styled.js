import styled from "styled-components";

const StyledFeatures = styled.ul`
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
		padding: 1.7em;

		svg {
			font-size: 4.5rem;
			margin-bottom: 1.5rem;
		}

		h3 {
			font-size: 1.8rem;
			margin-bottom: 0.5em;
		}

		p {
			font-size: 1.6rem;
			color: #777;
		}
	}
	@media screen and (max-width: 1250px) {
		width: 85%;
	}
	@media screen and (max-width: 1100px) {
		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 1.3em;
			h3 {
				text-align: center;
			}
			p {
				display: none;
			}
		}
		justify-content: space-around;
		bottom: -20px;
	}
	@media screen and (max-width: 600px) {
		bottom: -50px;
		li {
			h3 {
				font-size: 1.6rem;
			}
		}
	}
`;
export default StyledFeatures;
