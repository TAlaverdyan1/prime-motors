"use client";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { blogSection } from "@/lib/_data";
import { BlogInfoSection, BlogsSectionContent } from "@/models/models";



const Blog = () => {
    const currentLanguage = useLanguage();

    const currentBlogSection = blogSection[currentLanguage as keyof BlogInfoSection];

    return (
        <div className=" mt-20">
            <div className="text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4 m-10">{currentBlogSection?.title}</div>
            <div className=" mdbl:mt-20 mb-4 md:mb-6">
                <div className="bg-red h-[.5px] w-full" />
                {
                    currentBlogSection?.content.slice().reverse().map((el: BlogsSectionContent, index: number) => (
                        <div key={el.id}>
                            <div className=" flex flex-row justify-between mb-1 mdbl:mb-6 px-4 md:px-6 lg:px-12">
                                <div className=" my-6 w-[100%] text-left md:w-3/4 md:mr-8">
                                    <div className=" text-[17px] md:text-[18px] font-bold capitalize text-center md:text-left mb-6">{el.subtitle}</div>
                                    <div className="text-[16px] text-justify md:text-left">{el.description}</div>
                                    <div className=" mt-5">{el.date}</div>
                                </div>
                                <div className=" hidden md:flex md:w-1/4 relative mt-6" style={{ width: '270px', height: '220px' }}>
                                    <Image
                                        src={el.image}
                                        fill
                                        alt="iourMissionSectionImg"
                                        className=" object-cover object-center"
                                        sizes="(max-width: 270px) 100vw, 270px" />
                                </div>
                            </div>
                            {index !== currentBlogSection.content.length - 1 && <div className="bg-red h-[.5px] w-full" />}
                        </div>
                    ))
                }
                <div className=" bg-red py-[.5px] w-full"></div>
            </div>
        </div>
    )
};

export { Blog };