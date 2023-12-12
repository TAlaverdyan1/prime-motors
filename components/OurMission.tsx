"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ourMissionSection } from "@/lib/_data";
import { OurMissionInfoSection, OurMissionSectionItem } from "@/models/models";


const OurMission = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentOurMissionSection = ourMissionSection[currentLanguage as keyof OurMissionInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);
    

    return (
        <div className=" my-40">
            <div className=" text-red font-bold text-[30px] text-center px-4">{currentOurMissionSection.title}</div>
            {
                currentOurMissionSection?.content.map((el: OurMissionSectionItem) => (
                    <div key={el.id} className={` block custom:flex items-center mt-8 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] lg:px-12 xl:px-24">{el.description}</div>
                        <div className="w-full custom:w-1/2 h-[600px] relative"><Image src={el.image} alt="iourMissionSectionImg" fill className=" object-cover" /></div>
                    </div>
                ))
            }
        </div>
    );
};

export { OurMission };
