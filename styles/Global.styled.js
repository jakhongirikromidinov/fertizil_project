import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--accent: #18C7FF;
		--accent100: #ED2291; 
		--primary100: #005077;
		--black: #000000;
		--white: #FFFFFF;
		--pinksecondary: #F06BA8;
		--textdark: #211c1c;
		
		--buttonGradient: linear-gradient(77.8deg, #12C6FF -18.11%, #1472FF 72%);
		--backgroundGradient: linear-gradient(265.86deg, #A0CDDC -27.21%, #007EBB 53.23%);
		--bold: 700;
		--regular: 400;
	}
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
		font-size: 62.5%;
	}

	body {
		font-weight: 400;
		font-family: "Open Sans", sans-serif;
		font-style: normal;
		font-size: 1.25rem;
	}

	#__next {
		// Pushshing the footer to the bottom of the page
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
	}

	main {
		flex: 1;
	}

	a {
		text-decoration: none;
		color: inherit;
	}	

	img {
		width: 100%;
		display: block;
	}
	h1, h2, h3 {
		font-family: Montserrat;
		line-height: 110%;
	}
	ul {
		list-style-type: none;
	}
	button {
		border: none;
		color: inherit;
	}
	footer {
		margin-top: auto;
	}
	.hidden {
		overflow: hidden;
	}
`;

export default GlobalStyle;
