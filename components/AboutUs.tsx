"use client";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { aboutUsSection } from "@/lib/_data";
import { AboutUsInfoSection, AboutUsSectionContent } from "@/models/models";


const AboutUs = () => {
    const currentLanguage = useLanguage();

    const currentAboutUsSection = aboutUsSection[currentLanguage as keyof AboutUsInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4">{currentAboutUsSection?.title}</div>
            <div className=" mdbl:mt-20 mb-4 md:mb-6">
                {
                    currentAboutUsSection?.content.map((el: AboutUsSectionContent) => (
                        <div key={el.id} className={` block mdbl:flex items-center mdbl:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="text-center text-[16px] px-4 py-10 mdbl:w-1/2 md:px-6 lg:px-12 xl:px-24">{el.description}</div>
                            <div className="w-full mdbl:w-1/2 px-4 md:px-6 mdbl:px-0 relative">
                                <Image
                                    src={el.image}
                                    alt="aboutUsImg"
                                    layout="responsive"
                                    width={1079}
                                    height={730}
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export { AboutUs };