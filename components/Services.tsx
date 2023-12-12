"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { servicesSection } from "@/lib/_data";
import { ServicesInfoSection, ServicesSectionItem } from "@/models/models";

const Services = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentServicesSection = servicesSection[currentLanguage as keyof ServicesInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);


    return (
        <div className=" my-20">
            <div className=" text-red font-bold text-[30px] text-center px-4">{currentServicesSection.title}</div>
            {
                currentServicesSection?.content.map((el: ServicesSectionItem) => (
                    <div key={el.id} className={` block custom:flex items-center mt-8 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] lg:px-12 xl:px-24">{el.description}</div>
                        <div className="w-full custom:w-1/2 h-[600px] relative"><Image src={el.image} alt="servicesSectionImg" fill className=" object-cover" /></div>
                    </div>
                ))
            }

        </div>
    );
};

export { Services };