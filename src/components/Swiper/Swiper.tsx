"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { Swiper as SwiperType } from 'swiper';



interface ISliderConfig {
    id: string,
    imgUrl: string,
    title?: string,
    text?: string,
}

interface SliderProps {
    id: string;
}
// interface Ipagination {
//     [key: string]: boolean
// }


interface ISwiperConfig {
    [key: string]: {
        slides: ISliderConfig[];
        navigation?: boolean;
        // pagination?: boolean | Ipagination;
        modules?: Array<typeof EffectFlip | typeof Pagination | typeof Navigation | typeof FreeMode | typeof Thumbs>;
        className: string;
        effect?: string;
        grabCursor?: boolean;
        loop?: boolean;
        spaceBetween?: number;
        slidesPerView?: number;
        thumbs?: boolean;
    };
}

// Конфігурація Swiper
const swiperConfig: ISwiperConfig = {
    flip: {
        effect: 'flip',
        grabCursor: true,
        // pagination: { clickable: true },
        navigation: true,
        modules: [EffectFlip, Pagination, Navigation],
        className: "mySwiper",
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        slides: [
            {
                id: "Rotterdam",
                imgUrl: "https://budexim.com.ua/wp-content/uploads/2019/02/3.jpg",
                title: "Rotterdam",
                text: "In Rotterdam begeleidden we, samen met een lokale projectontwikkelaar, de volledige renovatie van drie appartementen. Dankzij ons deskundige projectbeheer verliep de transformatie vlot en professioneel.",
            },

            {
                id: "Den Haag",
                imgUrl: "https://vencon.ua/uploads/blog/all/remont-doma-dachi-kottedzha-o-chyom-ne-stoit-zabyt-1.jpg",
                title: "Den Haag",
                text: "In Den Haag realiseerden we een opvallende keukenrenovatie waarbij koud Mortex op stijlvolle wijze werd toegepast. Dit zorgde voor een unieke en hoogwaardige afwerking van zowel de muren als de vloeren.",
            },
            {
                id: "Wateringen",
                imgUrl: "https://www.remstroycom.net/wp-content/uploads/2024/03/vip-design-27.webp",
                title: "Wateringen",
                text: "In Wateringen ondersteunden we het ontwerp en het projectbeheer van een kamer­renovatie op de begane grond, waarbij functionaliteit en stijl naadloos werden gecombineerd.",
            },
            {
                id: "Breda",
                imgUrl: "https://sun9-64.userapi.com/s/v1/ig2/Ql6orU6xgNtTEoxYv4RLOPewUxmw4neqKeE1pQyl3Ns2_n9k-ctJJCsktus5TvRtYCyP6GaV7PeMyy8jfpr5B8NX.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=11LwrckSPk1tZFWEtMXB3U_wBwtGVsiNniKSNSMQzYk&cs=605x807",
                title: "Breda",
                text: "In Breda realiseerden we een renovatie waarbij een uitbreiding op de derde verdieping werd toegevoegd. Hierdoor werd één appartement succesvol opgesplitst in twee afzonderlijke woonunits.",
            },
            {
                id: "Schiedam",
                imgUrl: "https://spec-remont.kiev.ua/images/igallery/resized/1-100/g_remont_doma_1-43-1000-1000-80.jpg",
                title: "Schiedam",
                text: "Aan de zuidkant van Schiedam waren we verantwoordelijk voor het toezicht op een renovatieproject, waarbij we in opdracht van een projectontwikkelaar een woning soepel en efficiënt transformeerden tot twee afzonderlijke appartementen.",
            },
            {
                id: "Den-Haag-Zuid",
                imgUrl: "https://remontprofi.dp.ua/wp-content/uploads/2020/01/kompleksnyy_remont_kvartir_v_donecke_dnr-370x285.jpg",
                title: "Den Haag-Zuid",
                text: "Op de tweede verdieping realiseerden we een grondige renovatie, met oog voor detail en respect voor de klassieke stijl, die naadloos werd geïntegreerd in het vernieuwde ontwerp.",
            },
        ]
    },

    thumbs: {
        loop: true,
        thumbs: true,
        spaceBetween: 10,
        navigation: true,
        modules: [FreeMode, Navigation, Thumbs],
        className: "mySwiper2",
        slides: [{
            id: "101",
            imgUrl: "https://remont-f.ru/upload/iblock/f78/remont-3-komnatnoy-kvartiry-144-kv-m-20-3678.jpg",
        }]
    }

};

export default function Slider({ id }: SliderProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const { slides, thumbs } = swiperConfig[id]



    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            {/* Основний слайдер */}
            <div className="w-full">
                <Swiper
                    loop={true}
                    navigation={true}
                    thumbs={thumbs ? { swiper: thumbsSwiper } : undefined}
                    modules={[Navigation, Thumbs]}
                    className="relative pb-10"
                >
                    {slides.map(({ id, imgUrl, title, text }, index) => (
                        <SwiperSlide key={id} className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="relative w-full h-64 sm:h-80 md:h-96">
                                <img src={imgUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="p-4 text-center">
                                {title && <h4 className="text-lg font-semibold text-blue-900">{title}</h4>}
                                {text && <p className="mt-2 text-gray-600">{text}</p>}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Мініатюри (thumbs) */}
            {id === "thumbs" && (
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 mt-4"
                >
                    {slides.map(({ id, imgUrl }, index) => (
                        <SwiperSlide key={id + index} className="cursor-pointer">
                            <img src={imgUrl} alt={`Slide ${index + 1}`} className="w-full h-20 object-cover rounded-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}



