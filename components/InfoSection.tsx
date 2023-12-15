"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { homepageInfoSection } from "@/lib/_data";
import { HomepageInfoSection, InfoSectionItem } from "@/models/models";


const InfoSection = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentInfoSection = homepageInfoSection[currentLanguage as keyof HomepageInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] capitalize text-center px-4">{currentInfoSection?.title}</div>
            {
                currentInfoSection.content.map((el: InfoSectionItem) => (
                    <div key={el.id}>
                        <div className=" text-center text-[16px] px-4 py-10 md:px-6 md:text-[17px] lg:px-12 xl:px-24">{el.description}</div>
                        <div className=" w-[100%] h-[600px] relative "><Image src={el.image} alt="infoSectionImg" fill className="object-cover w-full h-full" /></div>
                    </div>
                ))
            }
            <div className=" my-9">
                <Link href={"/about-us"} className="p-3 text-red font-bold border-2 border-red md:px-8 md:text-[20px]">
                    <span className=" hover:border-b-2 hover:border-b-red">{currentInfoSection.btn_text}</span>
                </Link>
            </div>
        </div>
    )
};

export { InfoSection };