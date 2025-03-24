'use client';
import Slider from "@/components/Swiper/Swiper";
import React, { useState } from "react";
import { FaDraftingCompass, FaTools, FaBath, FaTimes, FaPlus } from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";


const services = [
    {
        icon: <FaDraftingCompass size={40} />,
        title: "BOUWTEKENINGEN",
        description:
            "Wij zorgen voor nauwkeurige bouwtekeningen in samenwerking met ervaren architecten en projectleiders. Of u deze aanlevert aan uw aannemer of het volledige traject aan ons overlaat — wij garanderen duidelijke plannen en slimme oplossingen.",
    },
    {
        icon: <FaTools size={40} />,
        title: "BOUWVERGUNNINGEN",
        description:
            "Plannen voor een aanbouw of verbouwing? Wij verzorgen de volledige aanvraag bij de gemeente en begeleiden het proces tot de vergunning rond is. Zo kan uw aannemer zonder zorgen aan de slag, en uw project vlot van start.",
    },
    {
        icon: <FaBath size={40} />,
        title: "TOTALE RENOVATIE",
        description:
            "Onze alles-in-één renovatieservice neemt het volledige projectmanagement voor zijn rekening. Van coördinatie op locatie tot kwaliteitscontrole en budgetbewaking – wij regelen alles, zodat u geen aparte aannemer hoeft in te schakelen.",
    },
];


const accordionItems = [
    {
        title: "Moeiteloos Projectbeheer",
        description: "Ik vereenvoudig uw leven met uitgebreide diensten en bied een alles-in-één oplossing voor al uw behoeften.",
        icon: "📑",
    },
    {
        title: "Eenvoudige Klantbetrokkenheid",
        description: "Ik beheren communicatie efficiënt en houden klanten op de hoogte van eventuele veranderingen of complicaties gedurende het proces.",
        icon: "👍",
    },
    {
        title: "Eerlijke Prijzen en Kwaliteitsborging",
        description: " Met mijn toewijding ligt in transparante en eerlijke prijsstelling, zodat klanten waarde krijgen door duidelijk inzicht in de kosten.",
        icon: "📊",
    },
    {
        title: "Wereldwijde Toegankelijkheid en Gemak",
        description: "Als internationaal werkende specialist help ik expats bij hun renovaties door helderheid te bieden over kosten en regelgeving – ook wanneer zij zich in het buitenland bevinden.",
        icon: "🌍",
    }
];

const HomePage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <>
            <section className="py-16 bg-gray-50 px-4 md:px-12 lg:px-16">
                <div id="interier" className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4">
                    <hr className="w-16 border-t-2 border-blue-950" />
                    <h2 className="text-3xl md:text-4xl font-bold border-blue-950">Projectbeheer</h2>
                </div>
                <p className="mt-4 text-lg text-gray-900 text-center md:text-left">
                    Wij regelen alles van begin tot eind
                </p>


                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br from-[#152248] to-[#A50044] border border-[#FFCD00] 
        rounded-2xl p-6 text-center shadow-md hover:shadow-2xl 
        hover:scale-[1.02] transition duration-300 ease-in-out animate-fade-up`}
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                animationFillMode: "both",
                            }}
                        >
                            {/* Icon in circle */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFCD00] text-[#152248] text-3xl shadow-md group-hover:scale-110 transition">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-white/90 leading-relaxed text-sm min-h-[120px]">
                                {service.description}
                            </p>

                            {/* Hover bottom indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#FFCD00] rounded-full opacity-0 group-hover:opacity-100 transition" />
                        </div>
                    ))}
                </div>



                {/* Проекти */}
                <div id="projects" className="p-6 md:p-14 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-10">
                    <div className="lg:w-1/2 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4">
                            <hr className="w-16 border-t-2 border-blue-950" />
                            <h2 className="text-3xl md:text-4xl font-bold border-blue-950">PROJECTEN</h2>
                        </div>
                        <p className="text-gray-900 mt-4 leading-relaxed">
                            Gedreven door een liefde voor tijdloos design en een doelgerichte aanpak, combineren we esthetiek met efficiëntie in elk project.
                        </p>
                        <p className="text-gray-900 mt-4 leading-relaxed">
                            Bij Vlagyimir Gyikovec draait het om meer dan alleen stijlvolle interieurs. We ontwerpen leefruimtes die persoonlijk aanvoelen en jarenlang blijven inspireren. Ons team begeleidt elk detail van concept tot oplevering — vlot, zorgvuldig en op maat van jouw wensen. Klaar om je ruimte nieuw leven in te blazen? Wij realiseren jouw visie.
                        </p>

                    </div>

                    {/* Слайдер */}
                    <div className="lg:w-1/2 w-full">
                        <Slider id="flip" />
                    </div>
                </div>

                {/* Акордеон Diensten */}
                <div className="mt-16 flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4">
                            <hr className="w-16 border-t-2 border-blue-950" />
                            <h2 className="text-3xl md:text-4xl font-bold border-blue-950">DIENSTEN</h2>
                        </div>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Transformeer uw woning met mijn persoonlijke renovatieaanpak, afgestemd op uw wensen en stijl.
                            Samen kijken we naar de mogelijkheden om uw ruimte optimaal te benutten.
                            Elk detail wordt met zorg en vakmanschap uitgevoerd, van concept tot afwerking.
                            Ik begeleid u in elke stap van het proces, zodat u met vertrouwen vooruit kunt kijken.
                            Uw droominterieur begint hier – laten we er iets bijzonders van maken.
                        </p>


                    </div>
                    <div className="lg:w-1/2 w-full">
                        {accordionItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-4">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#152248] to-[#A50044] border border-[#FFCD00] text-white text-lg">
                                            {item.icon}
                                        </div>
                                        <span className="text-lg font-semibold text-blue-900">{item.title}</span>
                                    </div>
                                    {openIndex === index ? (
                                        <FaTimes className="text-bg-gradient-to-br from-[#152248] to-[#A50044] border border-[#FFCD00]" />
                                    ) : (
                                        <FaPlus className="text-bg-gradient-to-br from-[#152248] to-[#A50044] border border-[#FFCD00]" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <p className="mt-2 text-gray-600">{item.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA секція */}
            <div className="bg-gray-50 mb-12 px-4">
                <div className="relative w-full max-w-4xl mx-auto mt-10 h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/img/img5.jpeg"
                        alt="Renovation Call-to-Action"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                        <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                            NEEM CONTACT MET ONS OP VOOR UW RENOVATIE.
                        </h2>
                        <p className="text-white text-lg mt-4 max-w-2xl drop-shadow-md">
                            Ontwerp uw ruimte en ontvang binnen enkele minuten een schatting.
                        </p>

                        {/* Анімована стрілка */}
                        <motion.div
                            className="mt-6"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <FaArrowDown className="text-white text-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default HomePage;
