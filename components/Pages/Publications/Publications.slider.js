import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { PublicationImagesData } from "../../../data/data";
import Image from "next/dist/client/image";

const PublicationSlider = () => {
	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			modules={[Pagination, Autoplay]}
			className="mySwiper"
			centeredSlides={true}
			autoplay={{ delay: 2500, disableOnInteraction: false }}
			breakpoints={{
				320: {
					centeredSlides: true,
					slidesPerView: 1.6,
					spaceBetween: 50
				},
			}}
		>
			{PublicationImagesData.map((item, index) => (
				<SwiperSlide key={index}>
						<Image src={item.link} alt="publication image" width={476} height={648}/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default PublicationSlider;
