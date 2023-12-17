"use client";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { blogSection } from "@/lib/_data";
import { BlogInfoSection, BlogsSectionItem } from "@/models/models";



const Blog = () => {
    const currentLanguage = useLanguage();

    const currentBlogSection = blogSection[currentLanguage as keyof BlogInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4 m-10">{currentBlogSection?.title}</div>
            {
                currentBlogSection?.content.slice().reverse().map((el: BlogsSectionItem) => (
                    <div key={el.id}>
                        <div className=" bg-red py-[.5px] w-full"></div>
                        <div className=" flex flex-row mb-5">
                            <div className=" my-6 w-[100%] px-4 text-left md:w-3/4 md:px-6 lg:px-12">
                                <div className=" text-[20px] font-bold my-6 capitalize text-center md:text-left">{el.subtitle}</div>
                                <div className=" text-justify md:text-left">{el.description}</div>
                                <div className=" mt-4">{el.date}</div>
                            </div>
                            <div className=" hidden md:flex relative mt-4 mr-4 md:mr-6 lg:mr-12" style={{ width: '450px', height: '300px' }}>
                                <Image src={el.image} width={450} height={300} layout="responsive" alt="iourMissionSectionImg" className=" object-cover" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export { Blog };