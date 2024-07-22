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

// HARDCODED DATA
const logos = [

    {
        alternative_text: "clark-college",
        source: "/logos/clark-college.png",
    },
    {
        alternative_text: "wellhaven",
        source: "/logos/well-haven.svg",
    },
    {
        alternative_text: "digital reality",
        source: "/logos/digital-reality.svg",
    },
    {
        alternative_text: "oofos",
        source: "/logos/oofos.svg",
    },
    {
        alternative_text: "vancouver clinic",
        source: "/logos/vancouver-clinic.svg",
    },
    {
        alternative_text: "tripwire",
        source: "/logos/tripwire.svg",
    },
    {
        alternative_text: "zoominfo",
        source: "/logos/zoominfo.svg",
    },
    {
        alternative_text: "sempdx",
        source: "/logos/sempdx.png",
    },
    {
        alternative_text: "weedmaps",
        source: "/logos/weed-maps.svg",
    },
    {
        alternative_text: "recording",
        source: "/logos/recording.svg",
    },
    {
        alternative_text: "wsu",
        source: "/logos/wsu.svg",
    },
    {
        alternative_text: "waste connections",
        source: "/logos/waste-connection.svg",
    },

]

const LogoCarousel = () => {

    return (

        <section className="py-12">
            <Swiper
                // AUTOPLAY TRUE
                autoplay={{
                    delay:2000,
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
