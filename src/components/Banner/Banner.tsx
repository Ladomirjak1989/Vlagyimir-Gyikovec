'use client';
import React from "react";
import Link from "next/link";

const Banner = () => {
    return (
        <section
            className="relative w-full h-[900px] md:h-[600px] flex items-center justify-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/img/img2.jpg')" }}
        >
            <div className="relative z-10 text-white px-4 sm:px-6 md:px-12 max-w-2xl mx-auto text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    VOLLEDIGE BEGELEIDING VAN UW RENOVATIE
                </h1>
                <p className="mt-4 text-lg sm:text-xl font-light">
                    Als <span className="text-[#FFCD00] font-semibold">Vlagyimir Gyikovec</span> weet ik dat een renovatie veel organisatie en aandacht voor detail vereist...
                </p>

                <Link
                    href="#contact"
                    className="mt-6 border-2 px-8 sm:px-16 md:px-24 py-2 bg-gradient-to-br from-[#152248] to-[#A50044] border-[#f8f7f4] rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-[1.02] 
               transition duration-300 ease-in-out
             flex items-center justify-center gap-2 
             text-lg font-medium w-full sm:w-auto group text-amber-300"
                >
                    NEEM CONTACT OP
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-2xl">
                        ↓
                    </span>
                </Link>

            </div>


            {/* Інформаційний блок */}
            <div className="relative h-full w-full">
                <div className="mt-1 m z-50 right-6 top-10 bg-[#152248] text-[#FFCD00] p-6 md:p-8 text-sm md:text-base max-w-3xl rounded-lg shadow-lg border border-white">
                    <p className="border-l-2 border-white pl-4">
                        Daarom zorgen wij voor een totaalrenovatie waarbij we elke fase begeleiden – van het eerste ontwerp tot de uiteindelijke oplevering. U hoeft zich nergens zorgen over te maken, want wij regelen alles zodat u zich volledig kunt richten op het eindresultaat.
                    </p>

                    <p className="mt-4 font-bold text-[#FFCD00] border-l-2 border-white pl-4">
                        Bel +31 (06) 11 - 08 - 22 - 78
                    </p>

                    <hr className="mt-4 w-64 border-[#A50044]" />
                </div>
            </div>


        </section>
    );
};

export default Banner;



