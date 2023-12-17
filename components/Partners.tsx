"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "./SelectLanguage";
import { partnersSection } from "@/lib/_data";
import { PartnersInfoSection, PartnersSectionItem } from "@/models/models";


const Partners = () => {
    const currentLanguage = useLanguage();

    const currentPartnersSection = partnersSection[currentLanguage as keyof PartnersInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentPartnersSection.title}</div>
            {
                currentPartnersSection?.content.map((el: PartnersSectionItem) => (
                    <div key={el.id} className={` block custom:flex items-center mt-8 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className=" text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] lg:px-12 xl:px-24">
                            <div className=" mb-8">
                                <div className=" text-[20px] font-bold text-red m-3 capitalize">{el.subtitle}</div>
                                {el.description}
                            </div>
                            <Link
                                className=" top-6 p-3 text-red font-bold border-2 border-red md:px-8 md:text-[20px]"
                                href={el.link}>
                                <span className=" hover:border-b-2 hover:border-b-red duration-300">{el.btn_text}</span>
                            </Link>
                        </div>
                        <div className="w-full custom:w-1/2 h-[600px] relative"><Image src={el.image} alt="iourMissionSectionImg" fill className=" object-cover" /></div>
                    </div>
                ))
            }
        </div>
    )
};

export { Partners };