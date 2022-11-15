import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"
import Markdown from "react-markdown"
import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "utils/button"
import { Swiper, SwiperSlide } from 'swiper/react';
import image from "next/image"
const FeaturesCarousel = ({ data }) => {
    return (
        <div className="overflow-x-hidden">
            <div className="container xl:max-w-[75rem] my-16">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div className="col-start-1 col-end-2 flex flex-col py-5">
                        <h2 className="font-bold text-4xl mb-7 text-green-primary">{data.title}</h2>
                        <Markdown className="text-gray-600">{data.description}</Markdown>
                        <div className="flex flex-row gap-2 items-start justify-start mt-6">
                            {data.CTAlinks.map((button) => (
                                <ButtonLink
                                    button={button}
                                    appearance={getButtonAppearance(button.type, "light")}
                                    key={button.id}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-start-2 col-end-4">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className="overflow-visible"
                            style={{ clipPath: "inset(-100vw -100vw -100vw 0)", overflow: "visible" }}
                        >
                            {
                                data.carousel.map((item, i) => (
                                    <SwiperSlide key={i} style={{ height: "auto" }} className="h-auto w-64">
                                        <div style={{ backgroundColor: item.cardBgColor }} className={`${i % 2 !== 0 ? 'mt-6' : 'mt-0'} py-5 px-7 flex flex-col h-full w-[250px]`}>
                                            <h3 className="text-xl font-bold mb-3">
                                                {item.title}
                                            </h3>
                                            <Markdown>{item.description}</Markdown>
                                            <div className="flex justify-end mt-auto">
                                                {item.image.data && <NextImage className="self-end flex-grow-0 p-1" width={56} height={56} media={item.image} />}
                                            </div>
                                        </div>
                                    </SwiperSlide>))
                            }
                        </Swiper>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default FeaturesCarousel