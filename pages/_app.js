import GlobalStyle from "../styles/Global.styled";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />

			<GlobalStyle />
		</>
	);
}

export default appWithTranslation(MyApp);
