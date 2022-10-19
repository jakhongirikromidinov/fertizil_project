import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";

export const LangDropDown = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--white);
	font-size: 1.8rem;
	cursor: pointer;
	gap: 1rem;
	:hover {
		.list {
			opacity: 1;
			transition: 0.3s ease-in-out;
			pointer-events: all;
		}
		.arrow {
			transform: rotate(180deg);
			transition: 0.3s ease-in-out;
		}
	}
	@media screen and (max-width: 1200px) {
		font-size: clamp(1.5rem, 1.5vw, 1.8rem);
		width: 15%;
	}
	@media screen and (max-width: 800px) {
		color: var(--primary100);
	}
`;
export const LangDropDownChosen = styled.div`
	position: relative;
`;

export const LangDropDownList = styled.ul`
	padding-bottom: 20px;
	position: absolute;
	top: 20px;
	left: 0;
	width: 100%;
	opacity: 0;
	pointer-events: none;
`;

export const LangDropDownVariant = styled.li`
	margin: 2rem 0;
	cursor: pointer;
`;

export const GlobeIcon = styled(BsGlobe)`
	fill: white;
	font-size: 2.1rem;
	@media screen and (max-width: 800px) {
		fill: var(--accent);
	}
`;

export const DropdownIcon = styled(GoChevronDown)` 
	fill: white;
	font-size: 2.8rem;
	margin-left: -2rem;
	@media screen and (max-width: 800px) {
		fill: var(--accent);
	}
`;
