import GlobalStyle from "../styles/Global.styled";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Script id="tawk" strategy="beforeInteractive">
				{`
					var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
					(function(){
						var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
						s1.async=true;
						s1.src='https://embed.tawk.to/636df537daff0e1306d6dc31/1ghiobp62';
						s1.charset='UTF-8';
						s1.setAttribute('crossorigin','*');
						s0.parentNode.insertBefore(s1,s0);
					})();  
					`}
			</Script>
			<GlobalStyle />
		</>
	);
}

export default appWithTranslation(MyApp);
