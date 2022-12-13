import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageBanner from "../components/Pages/PageBanner";
import MainSection from "../components/Pages/MainSection";
import Tabs from "../components/Pages/Tabs";
import { FemaleData, FemaleTabsData } from "../data/data";
import Reviews from "../components/Pages/Reviews/Reviews";
import Publications from "../components/Pages/Publications/Publications";
import { Layout } from "../components/common/Common";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Women() {
	const router = useRouter();
	return (
		<Layout footer>
			<Head>
				{router.locale === "uz" && <title>Fertizil F — Ayollar uchun</title>}
				{router.locale === "ru" && <title>Fertizil F — Для женщин</title>}
			</Head>
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
				"footer",
			])),
		},
	};
}
