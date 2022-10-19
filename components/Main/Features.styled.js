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
export default StyledFeatures;