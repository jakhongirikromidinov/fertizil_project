import Link from "next/link";

import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import StyledPublications, {
	Content,
	Title,
	PublicationImage,
	PublicationSliderWrapper,
} from "./Publications.styled";
import { Modal } from "../../common/Common";
import Image from "next/image";
import { PublicationImagesData } from "../../../data/data";
import { Container } from "../../common/Common.styled";
import { useState, useEffect } from "react";
import PublicationSlider from "./Publications.slider";

const Publications = ({ male }) => {
	const [clickedImg, setClickedImg] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(null);

	useEffect(() => {
		clickedImg === true
			? document.body.classList.add("hidden")
			: document.body.classList.remove("hidden");
	}, [clickedImg]);

	const handleClick = (item, index) => {
		setClickedImg(item.link);
		setCurrentIndex(index);
	};

	const { t } = useTranslation();

	const router = useRouter();

	const handleChangeDirection = () => {
		router.locale = "ru";
		console.log(router.locale);
	};

	return (
		<StyledPublications male={male}>
			<Container>
				<Content male={male}>
					<Title male={male}>
						{t("publications:title")}
						<span>{t("publications:title_span")}</span>
					</Title>
					<PublicationImage>
						{PublicationImagesData.map((item, index) => (
							<Image
								key={index}
								src={item.link}
								width={312}
								height={424}
								alt="img"
								onClick={() => handleClick(item, index)}
							/>
						))}
						{clickedImg && (
							<Modal
								clickedImg={clickedImg}
								setClickedImg={setClickedImg}
								handleClick={handleClick}
							/>
						)}
					</PublicationImage>
					<PublicationSliderWrapper>
						<PublicationSlider />
					</PublicationSliderWrapper>
				</Content>
			</Container>
		</StyledPublications>
	);
};

export default Publications;
