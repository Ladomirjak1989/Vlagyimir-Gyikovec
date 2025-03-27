'use client';
import React from "react";
import Link from "next/link";

const Banner = () => {
    return (
        <section
            className="relative w-full min-h-[800px] md:h-[600px] flex items-center justify-center bg-no-repeat bg-cover bg-center px-4 sm:px-6 lg:px-16"
            style={{ backgroundImage: "url('/img/img2.jpg')" }}
        >
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 text-white">
                {/* Ліва частина – Текст та кнопка */}
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        VOLLEDIGE BEGELEIDING VAN UW RENOVATIE
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl font-light">
                        Als <span className="text-[#FFCD00] font-semibold">Vlagyimir Gyikovec</span> weet ik dat een renovatie veel organisatie en aandacht voor detail vereist...
                    </p>

                    <Link
                        href="#contact"
                        className="mt-6 inline-flex border-2 border-[#f8f7f4] bg-gradient-to-br from-[#152248] to-[#A50044] text-amber-300 rounded-2xl px-8 sm:px-16 py-3 shadow-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out items-center gap-2 text-lg font-medium"
                    >
                        NEEM CONTACT OP
                        <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                            ↓
                        </span>
                    </Link>
                </div>

                {/* Права частина – Інформаційний блок */}
                <div className="bg-[#152248]/90 text-[#FFCD00] border border-white p-6 md:p-8 rounded-xl shadow-lg max-w-md w-full">
                    <p className="border-l-2 border-white pl-4 text-sm md:text-base leading-relaxed">
                        Daarom zorgen wij voor een totaalrenovatie waarbij we elke fase begeleiden – van het eerste ontwerp tot de uiteindelijke oplevering. U hoeft zich nergens zorgen over te maken, want wij regelen alles zodat u zich volledig kunt richten op het eindresultaat.
                    </p>

                    <p className="mt-4 font-bold border-l-2 border-white pl-4">
                        Bel +31 (06) 11 - 08 - 22 - 78
                    </p>

                    <hr className="mt-4 w-3/4 border-[#A50044]" />
                </div>
            </div>
        </section>
    );

};

export default Banner;



