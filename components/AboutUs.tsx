"use client";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { aboutUsSection } from "@/lib/_data";
import { AboutUsInfoSection, AboutUsSectionItem } from "@/models/models";


const AboutUs = () => {
    const currentLanguage = useLanguage();

    const currentAboutUsSection = aboutUsSection[currentLanguage as keyof AboutUsInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentAboutUsSection?.title}</div>
            {
                currentAboutUsSection?.content.map((el: AboutUsSectionItem) => (
                    <div key={el.id} className={` block custom:flex items-center custom:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] lg:px-12 xl:px-24">{el.description}</div>
                        <div className="w-full custom:w-1/2 h-[350px] sm:h-[420px] md:h-[650px] relative">
                            <Image
                                src={el.image}
                                alt="aboutUsImg"
                                fill
                                className=" object-cover object-center"
                                sizes="(max-width: 600px) 100vw, 600px" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export { AboutUs };