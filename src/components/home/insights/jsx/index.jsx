// IMPORT SWIPER SLIDER 
import { Swiper, SwiperSlide } from "swiper/react"

// IMPORT SWIPER SLIDES
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// IMPORT SWIPER MODULES
import { Autoplay } from "swiper/modules"

// IMPORT JSX ATOMS
import PictureContain from "@/atoms/picture/internal/contain/jsx"

// CONSTANTS
const logos = [
    {
        alternative_text: "10-best-design",
        source: "/images/insights/10bestdesign.png",
    },
    {
        alternative_text: "best-business",
        source: "/images/insights/best-business.jpg",
    },
    {
        alternative_text: "cheers-logo",
        source: "/images/insights/cheers-logo.png",
    },
    {
        alternative_text: "expertise",
        source: "/images/insights/expertise.png",
    },
    {
        alternative_text: "forbes",
        source: "/images/insights/forbes.png",
    },
    {
        alternative_text: "huffington",
        source: "/images/insights/huffington.png",
    },
    {
        alternative_text: "mashable",
        source: "/images/insights/mashable.png",
    },
    {
        alternative_text: "sej",
        source: "/images/insights/sej-logo-small.png",
    },
    {
        alternative_text: "top-clutch-marketing",
        source: "/images/insights/top-clutch-marketing-strategy-company-portland.webp",
    },
    {
        alternative_text: "top-clutch-seo",
        source: "/images/insights/top-clutch-seo-company-portland.webp",
    },
]

const LogoCarousel = () => {

    return (

        <section className="py-6">
            <Swiper
                // AUTOPLAY TRUE
                autoplay={{
                    delay:3000,
                    disableOnInteraction: false,
                }}

                // FILTER TO MAKE LOGOS GRAY
                className="filter grayscale"

                // INFINITEllY RUN SLIDES
                loop={ true }
                modules={[Autoplay,]}

                // MOBILE SHOW ONE SLIDE
                slidesPerView={ 1.8 }
                spaceBetween={ 30 }
                centeredSlides={ true }

                // RESPONSIVE
                breakpoints={{

                    // AFTER 640 WINDOW SIZE
                    640: {

                        slidesPerView: 2,
                        spaceBetween: 10,

                    },

                    // AFTER 768 WINDOW SIZE
                    768: {

                        slidesPerView: 3.3,
                        spaceBetween: 10,
                        centeredSlides: true,

                    },

                    // AFTER 1024 WINDOW SIZE
                    1024: {

                        slidesPerView: 4.6,
                        spaceBetween: 10,
                        centeredSlides: true,

                    },

                    // AFTER 1280 WINDOW SIZE
                    1280: {

                        slidesPerView: 5.8,
                        spaceBetween: 10,
                        centeredSlides: true,

                    },

                }}
            >
                {
                
                    logos.map( ( logo ) => (

                        <SwiperSlide>
                            <div className="flex items-center justify-center">
                                <div className="h-28 aspect-video">
                                    <PictureContain
                                        alternative_text={ logo.alternative_text } 
                                        source={ logo.source } 
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                
                }
            </Swiper>
        </section>

    )

}
export default LogoCarousel
