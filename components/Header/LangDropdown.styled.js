import styled from "styled-components";

export const LangDropDown = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--white);
	font-size: 1.8rem;
	cursor: pointer;
	gap: 0.1rem;
	:hover {
		.rotate {
			transform: rotate(180deg);
			transition: 0.3s ease-in-out;
		}
		.reverse {
			transform: scaleX(-1);
			transition: 0.3s ease-in-out;
		}
		.list {
			opacity: 1;
			transition: 0.3s ease-in-out;
			pointer-events: all;
		}
	}
	@media screen and (max-width: 1200px) {
		font-size: clamp(1.5rem, 1.5vw, 1.8rem);
	}
	@media screen and (max-width: 800px) {
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);
		color: var(--primary100);
		font-size: 1.8rem;
	}
	@media screen and (max-width: 600px) {
		transform: translate(60%, -50%);
	}
`;
export const LangDropDownChosen = styled.div`
	position: relative;
	padding: 1rem;
`;

export const LangDropDownList = styled.ul`
	padding: inherit;
	padding-bottom: 20px;
	position: absolute;
	top: 20px;
	left: 0;
	opacity: 0;
	pointer-events: none;
	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 0;
	}
`;

export const LangDropDownVariant = styled.li`
	margin: 2rem 0;
	cursor: pointer;
	@media screen and (max-width: 800px) {
		background-color: white;
		padding: 1rem;
	}
`;
export const StyledIcons = styled.div`
	@media screen and (max-width: 800px) {
		svg {
			path {
				stroke: var(--primary100);
			}
		}
	}
`;

// export const GlobeIcon = styled(NavbarGlobe)`
// 	fill: white;
// 	font-size: 2.1rem;
// 	@media screen and (max-width: 800px) {
// 		fill: var(--accent);
// 	}
// `;

// export const DropdownIcon = styled(NavbarChevron)`
// 	fill: white;
// 	font-size: 2.8rem;
// 	margin-left: -2rem;
// 	@media screen and (max-width: 800px) {
// 		fill: var(--accent);
// 	}
// `;
