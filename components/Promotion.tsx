"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { promotionSection } from "@/lib/_data";
import { PromotionInfoSection, PromotionSectionItem } from "@/models/models";

const Promotion = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentPromotionSection = promotionSection[currentLanguage as keyof PromotionInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);

    return (
        <div className=" my-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentPromotionSection.title}</div>
            <div className=" mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:px-12 xl:px-24">
                {
                    currentPromotionSection?.content.map((el: PromotionSectionItem) => (
                        <div key={el.id}>
                            <div className=" flex flex-col justify-center items-center border-2 border-red rounded py-8">
                                <Image
                                    src={el.image}
                                    width={450}
                                    height={250}
                                    layout="fixed"
                                    alt="iourMissionSectionImg"
                                    className=" mx-4 px-4"
                                    style={{ width: '400px', height: '250px', objectPosition: 'center center' }} />
                                <div className=" text-center text-[16px] px-4 my-5">
                                    <div className=" text-[20px] font-bold text-red m-3 capitalize px-4">{el.subtitle}</div>
                                    {el.description}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { Promotion };