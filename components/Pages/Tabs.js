//core
import Image from "next/image";
import { useState } from "react";

//container
import { Container } from "../common/Common.styled";

//src
import FemaleDrugImage from "../../public/images/tabs_image_female.png";
import MaleDrugImage from "../../public/images/tabs_image_male.png";
import {
	Tab_icon_1,
	Tab_icon_2,
	Tab_icon_3,
	Tab_icon_4,
} from "../common/Common";

//styles
import StyledTabs, {
	Content,
	TabsContainer,
	TabsBlock,
	TabsButton,
	ContentContainer,
	ContentBlock,
	DrugImageWrapper,
	Quote,
} from "./Tabs.styled";

import { MaleTabsData } from "../../data/data";

import { useTranslation } from "next-i18next";

const Tabs = ({ data, type }) => {
	const { t } = useTranslation();

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<StyledTabs>
			<Container>
				<Content type={type}>
					<h2>
						{t("properties:title")} <span>{t("properties:title_span")} *</span>
					</h2>

					<TabsContainer>
						<TabsBlock type={type}>
							<TabsButton
								type={type}
								className={toggleState === 1 ? "tab_active" : ""}
								onClick={() => toggleTab(1)}
							>
								<Tab_icon_2 />
								<span>{t("properties:indications")}</span>
							</TabsButton>
							<TabsButton
								type={type}
								className={toggleState === 2 ? "tab_active" : ""}
								onClick={() => toggleTab(2)}
							>
								<Tab_icon_3 />
								<span>{t("properties:directionsForUse")}</span>
							</TabsButton>
							<TabsButton
								type={type}
								className={toggleState === 3 ? "tab_active" : ""}
								onClick={() => toggleTab(3)}
							>
								<Tab_icon_1 />
								<span>{t("properties:contradictions")}</span>
							</TabsButton>
							<TabsButton
								type={type}
								className={toggleState === 4 ? "tab_active" : ""}
								onClick={() => toggleTab(4)}
							>
								<Tab_icon_4 />
								<span>{t("properties:other")}</span>
							</TabsButton>
						</TabsBlock>

						<ContentContainer type={type}>
							<ContentBlock
								type={type}
								className={toggleState === 3 ? "active" : ""}
							>
								<h3>{t("properties:contradictions")}</h3>
								<ul>
									{type === "male" &&
										t("properties:MaleTabsData.contradictions", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
									{type === "female" &&
										t("properties:FemaleTabsData.contradictions", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
								</ul>
							</ContentBlock>
							<ContentBlock className={toggleState === 1 ? "active" : ""}>
								<h3>{t("properties:indications")}</h3>
								<ul>
									{type === "male" &&
										t("properties:MaleTabsData.indications", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
									{type === "female" &&
										t("properties:FemaleTabsData.indications", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
								</ul>
							</ContentBlock>
							<ContentBlock className={toggleState === 2 ? "active" : ""}>
								<h3>{t("properties:directionsForUse")}</h3>
								<ul>
									{type === "male" &&
										t("properties:MaleTabsData.directionsForUse", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
									{type === "female" &&
										t("properties:FemaleTabsData.directionsForUse", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
								</ul>
							</ContentBlock>
							<ContentBlock className={toggleState === 4 ? "active" : ""}>
								<h3>{t("properties:other")}</h3>
								<ul>
									{type === "male" &&
										t("properties:MaleTabsData.other", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
									{type === "female" &&
										t("properties:FemaleTabsData.other", {
											returnObjects: true,
										}).map((item, index) => <li key={index}>{item}</li>)}
								</ul>
							</ContentBlock>
						</ContentContainer>
					</TabsContainer>
					<Quote>{t("properties:quote")}</Quote>
				</Content>
			</Container>
			<DrugImageWrapper>
				<Image
					src={data === MaleTabsData ? MaleDrugImage : FemaleDrugImage}
					alt="drug image box"
					width="500"
					height="500"
				/>
			</DrugImageWrapper>
		</StyledTabs>
	);
};

export default Tabs;
