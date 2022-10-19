import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageBanner from "../components/Pages/PageBanner";
import MainSection from "../components/Pages/MainSection";
import Tabs from "../components/Pages/Tabs";
import { FemaleData, FemaleTabsData } from "../data/data";
import Reviews from "../components/Pages/Reviews/Reviews";
import Publications from "../components/Pages/Publications/Publications";
import { Layout } from "../components/common/Common";

export default function Women() {
	return (
		<Layout footer>
			<PageBanner type="female" />
			<MainSection data={FemaleData} type="female" />
			<Tabs data={FemaleTabsData} type="female" />
			<Reviews female />
			<Publications />
		</Layout>
	);
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"banner",
				"pageBanner",
				"mainSection",
				"properties",
				"reviews",
				"publications",
				"footer"
			])),
		},
	};
}
