"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { homepageInfoSection } from "@/lib/_data";
import { HomepageInfoSection, InfoSectionItem } from "@/models/models";


const InfoSection = () => {
    const currentLanguage = useLanguage();

    const currentInfoSection = homepageInfoSection[currentLanguage as keyof HomepageInfoSection];

    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentInfoSection?.title}</div>
            {
                currentInfoSection.content.map((el: InfoSectionItem) => (
                    <div key={el.id}>
                        <div className=" text-center text-[16px] py-10 md:px-6 md:text-[17px] lg:px-12 xl:px-24">{el.description}</div>
                        <div className="w-full h-[350px] sm:h-[450px] md:h-[700px] relative">
                            <Image
                                src={el.image}
                                alt="branchImg"
                                fill
                                className=" object-cover object-center"
                                sizes="(max-width: 600px) 100vw, 600px" />
                        </div>
                    </div>
                ))
            }
            <div className=" my-9">
                <Link href={"/about-us"} className="p-3 text-red font-bold border-2 border-red md:px-8 md:text-[20px]">
                    <span className=" hover:border-b-2 hover:border-b-red duration-300">{currentInfoSection.btn_text}</span>
                </Link>
            </div>
        </div>
    )
};

export { InfoSection };