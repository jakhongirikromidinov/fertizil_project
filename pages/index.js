import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Banner from "../components/Main/Banner";
import { Layout } from "../components/common/Common"

export default function Home() {
	return (
		<Layout>
			<Banner />
		</Layout>
	);
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "banner"])),
		},
	};
}

