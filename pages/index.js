import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Banner from "../components/Main/Banner";
import { Layout } from "../components/common/Common";
import Head from "next/head";
import { useRouter } from "next/router";
export default function Home() {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				{router.locale === "uz" && (
					<title>Fertizil — Bepushtlikka qarshi dori-vositasi</title>
				)}
				{router.locale === "ru" && (
					<title>Fertizil — Лекарство от бесплодия</title>
				)}
			</Head>
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
