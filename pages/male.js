import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageBanner from "../components/Pages/PageBanner";
import MainSection from "../components/Pages/MainSection";
import { MaleData, MaleTabsData } from "../data/data";
import Tabs from "../components/Pages/Tabs";
import Reviews from "../components/Pages/Reviews/Reviews";
import Publications from "../components/Pages/Publications/Publications";
import { Layout } from "../components/common/Common";
import Head from "next/head";
import { useRouter } from "next/router";

export default function MalePage() {
	const router = useRouter();
	return (
		<Layout footer>
			<Head>
				{router.locale === "uz" && <title>Fertizil M — Erkaklar uchun</title>}
				{router.locale === "ru" && <title>Fertizil M — Для мужчин</title>}
			</Head>
			<PageBanner type="male" />
			<MainSection data={MaleData} type="male" />
			<Tabs data={MaleTabsData} type="male" />
			<Reviews male />
			<Publications male />
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
