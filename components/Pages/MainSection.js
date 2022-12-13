//core
import Image from "next/dist/client/image.js";
import { useRouter } from "next/router.js";

//i18n
import { useTranslation } from "next-i18next";

//container
import { Container } from "../common/Common.styled";

//circle, dots
import { Circle, MakeDots } from "../common/Common";

//styles
import StyledMainSection, {
	Content,
	Left,
	Right,
	DrugBoxImage,
	Text,
	FeatureItem,
	CircleWrapper,
	DotsWrapperTop,
	DotsWrapperBottom,
} from "./MainSection.styled.js.js";

const MainSection = ({ data, type }) => {
	//function for next router
	const router = useRouter();

	//function for internalisation
	const { t } = useTranslation("mainSection");

	//DOM rendering starts here
	return (
		<StyledMainSection
			type={type}
			id={type === "male" ? "MaleSection" : "FemaleSection"}
		>
			<Container>
				{data.map((section, index) => (
					<Content
						key={index}
						className={type === "male" ? "straight" : "reverse"}
					>
						<Left type={type}>
							<DrugBoxImage>
								<Image
									src={section.image}
									image="drug box image"
									width={type === "male" ? "592" : "572"}
									height={type === "male" ? "348" : "348"}
									quality={100}
									alt="drug image"
								/>

								<DotsWrapperTop type={type}>
									{type === "male" && <MakeDots amount={42} male />}
									{type === "female" && <MakeDots amount={42} female />}
								</DotsWrapperTop>

								<DotsWrapperBottom type={type}>
									{type === "male" && <MakeDots amount={42} male />}
									{type === "female" && <MakeDots amount={42} female />}
								</DotsWrapperBottom>
							</DrugBoxImage>
							{type === "male" && (
								<Text type={type}>
									<h2>
										<span className="male_accent">
											{t("MaleData.titlespan1")}
										</span>
										<span>{t("MaleData.titlespan2")}</span>
									</h2>
									<div>{t("MaleData.subtitle")}</div>
									<p>{t("MaleData.descr")}</p>
								</Text>
							)}
							{type === "female" && (
								<Text type={type}>
									<h2>
										<span className="female_accent">
											{t("FemaleData.titlespan1")}
										</span>
										<span>{t("FemaleData.titlespan2")}</span>
									</h2>
									<div>{t("FemaleData.subtitle")}</div>
									<p>{t("FemaleData.descr")}</p>
								</Text>
							)}
						</Left>

						<Right type={type}>
							{
								//male
								type === "male" && router.locale === "ru" && (
									<FeatureItem>
										<h3>
											<span className="male_accent">
												{t("MaleData.item1span1")}
											</span>
											{section.item1title1}
											<span className="male_accent">
												{t("MaleData.item1span2")}
											</span>
											<span className="bold">{t("MaleData.item1span3")}</span>
										</h3>

										<p className="feature_item_1_descr">
											{t("MaleData.item1descr")}
										</p>
									</FeatureItem>
								)
							}
							{type === "male" && router.locale === "uz" && (
								<FeatureItem>
									<h3>
										<span className="male_accent">
											{t("MaleData.item1span1")}
										</span>
										<span className="male_accent">
											{t("MaleData.item1span2")}
										</span>
										<span className="bold">{t("MaleData.item1span3")}</span>
										{t("MaleData.item1title1")}
									</h3>

									<p className="feature_item_1_descr">
										{t("MaleData.item1descr")}
									</p>
								</FeatureItem>
							)}
							{type === "male" && router.locale === "ru" && (
								<FeatureItem>
									<h3>
										<span className="male_accent">
											{t("MaleData.item2span1")}
										</span>
										{t("MaleData.item2title")}
										<span className="bold">{t("MaleData.item2span2")}</span>
										<span className="male_drop">
											{t("MaleData.item2span3")}
										</span>
									</h3>
									<p className="feature_item_2_descr">
										{t("MaleData.item2descr")}
									</p>
								</FeatureItem>
							)}
							{type === "male" && router.locale === "uz" && (
								<FeatureItem>
									<h3>
										<span className="male_accent">
											{t("MaleData.item2span1")}
										</span>
										<span className="bold">{t("MaleData.item2span2")}</span>
										<span className="male_drop">
											{t("MaleData.item2span3")}
										</span>
										{t("MaleData.item2title")}
									</h3>
									<p className="feature_item_2_descr">
										{t("MaleData.item2descr")}
									</p>
								</FeatureItem>
							)}
							{type === "male" && router.locale === "uz" && (
								<FeatureItem>
									<h3 className="list_title">
										<span className="male_accent">
											{t("MaleData.listTitleSpan")}
										</span>
										{t("MaleData.listTitle")}
									</h3>
									<ul>
										{t("MaleData.listItems", {
											returnObjects: true,
										}).map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</FeatureItem>
							)}
							{type === "male" && router.locale === "ru" && (
								<FeatureItem>
									<h3 className="list_title">
										<span className="male_accent">
											{t("MaleData.listTitleSpan")}
										</span>
										{t("MaleData.listTitle")}
									</h3>
									<ul>
										{t("MaleData.listItems", {
											returnObjects: true,
										}).map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</FeatureItem>
							)}

							{
								//female
								type === "female" && router.locale === "ru" && (
									<FeatureItem>
										<h3>
											<span className="female_accent">
												{t("FemaleData.item1span1")}
											</span>
											{section.item1title1}
											<span className="female_accent">
												{t("FemaleData.item1span2")}
											</span>
											<span className="bold">{t("FemaleData.item1span3")}</span>
										</h3>

										<p className="feature_item_1_descr">
											{t("FemaleData.item1descr")}
										</p>
									</FeatureItem>
								)
							}
							{type === "female" && router.locale === "uz" && (
								<FeatureItem>
									<h3>
										<span className="female_accent">
											{t("FemaleData.item1span1")}
										</span>
										<span className="female_accent">
											{t("FemaleData.item1span2")}
										</span>
										<span className="bold">{t("FemaleData.item1span3")}</span>
										{t("FemaleData.item1title1")}
									</h3>

									<p className="feature_item_1_descr">
										{t("FemaleData.item1descr")}
									</p>
								</FeatureItem>
							)}
							{type === "female" && router.locale === "ru" && (
								<FeatureItem>
									<h3>
										<span className="female_accent">
											{t("FemaleData.item2span1")}
										</span>
										{t("FemaleData.item2title")}
										<span className="bold">{t("FemaleData.item2span2")}</span>
										<span className="female_drop">
											{t("FemaleData.item2span3")}
										</span>
									</h3>
									<p className="feature_item_2_descr">
										{t("FemaleData.item2descr")}
									</p>
								</FeatureItem>
							)}
							{type === "female" && router.locale === "uz" && (
								<FeatureItem>
									<h3>
										<span className="female_accent">
											{t("FemaleData.item2span1")}
										</span>
										<span className="bold">{t("FemaleData.item2span2")}</span>
										<span className="female_drop">
											{t("FemaleData.item2span3")}
										</span>
										{t("FemaleData.item2title")}
									</h3>
									<p className="feature_item_2_descr">
										{t("FemaleData.item2descr")}
									</p>
								</FeatureItem>
							)}
							{type === "female" && router.locale === "uz" && (
								<FeatureItem>
									<h3 className="list_title">
										<span className="female_accent">
											{t("FemaleData.listTitleSpan")}
										</span>
										{t("FemaleData.listTitle")}
									</h3>
									<ul>
										{t("FemaleData.listItems", {
											returnObjects: true,
										}).map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</FeatureItem>
							)}
							{type === "female" && router.locale === "ru" && (
								<FeatureItem>
									<h3 className="list_title">
										<span className="female_accent">
											{t("FemaleData.listTitleSpan")}
										</span>
										{t("FemaleData.listTitle")}
									</h3>
									<ul>
										{t("FemaleData.listItems", {
											returnObjects: true,
										}).map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</FeatureItem>
							)}
						</Right>
					</Content>
				))}
			</Container>
			<CircleWrapper className={type === "male" ? "left" : "right"}>
				<Circle />
			</CircleWrapper>
		</StyledMainSection>
	);
};

export default MainSection;
