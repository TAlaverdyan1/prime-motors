"use client";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { ourMissionSection } from "@/lib/_data";
import { OurMissionInfoSection, OurMissionSectionItem } from "@/models/models";


const OurMission = () => {
    const currentLanguage = useLanguage();

    const currentOurMissionSection = ourMissionSection[currentLanguage as keyof OurMissionInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentOurMissionSection.title}</div>
            {
                currentOurMissionSection?.content.map((el: OurMissionSectionItem) => (
                    <div key={el.id} className={` block custom:flex items-center mt-8 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] lg:px-12 xl:px-24">{el.description}</div>
                        <div className="w-full custom:w-1/2 h-[600px] relative"><Image src={el.image} alt="iourMissionSectionImg" fill className=" object-cover" /></div>
                    </div>
                ))
            }
        </div>
    )
};

export { OurMission };
