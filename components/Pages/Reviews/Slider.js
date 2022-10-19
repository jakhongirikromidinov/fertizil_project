import { SwiperWrapper, SwiperSlideItem, QuoteIcon } from "./Slider.styled";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/dist/client/image";

const Slider = () => {
	const SwiperSlideItemWrapper = (props) => {
		return (
			<SwiperSlideItem>
				<QuoteIcon top>
					<Image src="/images/reviews_quote.png" alt="quote icon" width={40} height={40} />
				</QuoteIcon>
				{props.children}
				<QuoteIcon bottom reverse>
					<Image src="/images/reviews_quote.png" alt="quote icon" width={40} height={40} />
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
				centeredSlides={true}
				initialSlide={1}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
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
				<SwiperSlide>
					<SwiperSlideItemWrapper>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
							quibusdam.
						</p>

						<div>Leonardo Da Vinci, Italy, Florence</div>
					</SwiperSlideItemWrapper>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItemWrapper>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
							laboriosam possimus minus dolore ratione odio eius. Dolorum
							eveniet laborum aspernatur.
						</p>

						<div>Matthew McConaugehey, USA, Uvalde TX</div>
					</SwiperSlideItemWrapper>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItemWrapper>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
							assumenda minus neque, possimus temporibus saepe sint dicta odit
							modi reiciendis!
						</p>

						<div>Владимир Путин, Россия, Санкт-Петербург</div>
					</SwiperSlideItemWrapper>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItemWrapper>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium cupiditate, minima dicta cum consequuntur sunt nulla
							adipisci accusantium quisquam rem.
						</p>

						<div>Abel Tesfaye, Toronto, Canada</div>
					</SwiperSlideItemWrapper>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItemWrapper>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
							exercitationem!
						</p>

						<div>Шерали Джураев, Узбекистан, Андижанская область</div>
					</SwiperSlideItemWrapper>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper>
	);
};

export default Slider;
