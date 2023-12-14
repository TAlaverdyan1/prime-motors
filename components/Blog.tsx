"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { blogSection } from "@/lib/_data";
import { BlogInfoSection, BlogsSectionItem } from "@/models/models";



const Blog = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentBlogSection = blogSection[currentLanguage as keyof BlogInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] text-center px-4 m-10">{currentBlogSection?.title}</div>
            {
                currentBlogSection?.content.map((el: BlogsSectionItem) => (
                    <div key={el.id}>
                        <div className=" bg-red py-[.5px] w-full"></div>
                        <div className=" flex flex-row">
                            <div className=" my-6 w-3/4 px-10 text-left">
                                <div className=" text-[20px] font-bold m-3 capitalize">{el.subtitle}</div>
                                <div className="">{el.description}</div>
                                <div className=" mt-2">{el.date}</div>
                            </div>
                            <div className="w-1/4 relative m-4" style={{ height: 'auto' }}><Image src={el.image} alt="iourMissionSectionImg" fill className=" object-cover" /></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export { Blog };