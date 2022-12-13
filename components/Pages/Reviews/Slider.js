import { SwiperWrapper, SwiperSlideItem, QuoteIcon } from "./Slider.styled";

import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/dist/client/image";

const Slider = () => {
	const { t } = useTranslation();

	const SwiperSlideItemWrapper = (props) => {
		return (
			<SwiperSlideItem>
				<QuoteIcon top>
					<Image
						src="/images/reviews_quote.png"
						alt="quote icon"
						width={40}
						height={40}
					/>
				</QuoteIcon>
				{props.children}
				<QuoteIcon bottom reverse>
					<Image
						src="/images/reviews_quote.png"
						alt="quote icon"
						width={40}
						height={40}
					/>
				</QuoteIcon>
			</SwiperSlideItem>
		);
	};

	return (
		<SwiperWrapper>
			<Swiper
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper"
				speed={400}
				centeredSlides={true}
				loop={true}
				initialSlide={1}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				breakpoints={{
					320: {
						slidesPerView: 1,
						centeredSlides: false,
					},
					800: {
						slidesPerView: 1.5,
						centeredSlides: true,
						spaceBetween: 70,
					},
					950: {
						slidesPerView: 1.5,
						centeredSlides: true,
						spaceBetween: 100,
					},
					1000: {
						slidesPerView: 1.5,
						centeredSlides: true,
						spaceBetween: 120,
					},
					1100: {
						slidesPerView: 2,
						centeredSlides: true,
						spaceBetween: 120,
					},
					1440: {
						slidesPerView: 2.5,
						centeredSlides: true,
						spaceBetween: 130,
					},
				}}
			>
				{t("reviews:sectionReviews", {
					returnObjects: true,
				}).map((item, index) => (
					<SwiperSlide key={index}>
						<SwiperSlideItemWrapper>
							<p>{item.review}</p>
							<div>{item.review_author}</div>
						</SwiperSlideItemWrapper>
					</SwiperSlide>
				))}
			</Swiper>
		</SwiperWrapper>
	);
};

export default Slider;
