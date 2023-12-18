"use client";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { promotionSection } from "@/lib/_data";
import { PromotionInfoSection, PromotionSectionItem } from "@/models/models";

const Promotion = () => {
    const currentLanguage = useLanguage();

    const currentPromotionSection = promotionSection[currentLanguage as keyof PromotionInfoSection];
    const numItems = currentPromotionSection?.content.length || 0;

    const gridColumns = numItems === 1 ? "grid-cols-1 max-w-[500px]" : numItems === 2 ? "md:grid-cols-2 xl:px-48" : " md:grid-cols-2 lg:grid-cols-3 xl:px-24";


    return (
        <div className=" my-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentPromotionSection.title}</div>
            <div className={`mt-8 gap-6 py-8 grid px-8 lg:px-12 ${gridColumns}`}>
                {
                    currentPromotionSection?.content.map((el: PromotionSectionItem) => (
                        <div key={el.id}>
                            <div className=" flex flex-col justify-center items-center border-2 border-red rounded py-6">
                                <Image
                                    src={el.image}
                                    width={228}
                                    height={228}
                                    alt="iourMissionSectionImg"
                                    className=" mx-4 px-4" />
                                <div className=" text-center text-[16px] px-4 my-3">
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
};

export { Promotion };