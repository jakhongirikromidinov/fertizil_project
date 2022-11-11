import GlobalStyle from "../styles/Global.styled";
import { appWithTranslation } from "next-i18next";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<TawkMessengerReact
                propertyId="https://tawk.to/chat/636df537daff0e1306d6dc31"
                widgetId="1ghiobp62"/>
			<GlobalStyle />
		</>
	);
}

export default appWithTranslation(MyApp);
