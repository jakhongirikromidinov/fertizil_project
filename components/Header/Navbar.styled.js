import styled from "styled-components";

const StyledNavbar = styled.nav`
	padding: 1.7rem 0;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999999;
	width: 100%;
	font-family: Montserrat;
	@media screen and (max-width: 800px) {
		padding: 2rem 0;
		position: fixed;
		z-index: 999999;
		width: 100%;
		background: #ffff;
		box-shadow: 3px 1px 8px -4px rgba(0, 0, 0, 1);
	}
`;

export const Content = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
`;

export const NavbarList = styled.ul`
	display: flex;
	gap: 3.2rem;
	font-size: 1.8rem;
	color: var(--white);
	li:not(.bold) {
		a {
			transition: 0.3s ease-in-out;
			opacity: 0.7;
		}
	}
	li {
		a:hover {
			opacity: 1;
		}
	}
	@media screen and (max-width: 1200px) {
		font-size: clamp(1.5rem, 1.5vw, 1.8rem);
	}
	@media screen and (max-width: 950px) {
		gap: 1.4rem;
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
	.bold {
		font-weight: var(--bold);
	}
`;

export const NavbarBurger = styled.div`
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
	}
`;

export const NavbarPhone = styled.a`
	font-size: 1.6rem;
	color: var(--white);
	display: flex;
	align-items: center;
	gap: 0.6rem;
`;
export default StyledNavbar;
