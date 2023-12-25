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
        <div className="mt-20">
            <div className="text-red text-center font-bold text-[30px] uppercase px-4">{currentInfoSection?.title}</div>
            {currentInfoSection.content.map((el: InfoSectionItem) => (
                <div key={el.id}>
                    <div className="text-cente text-[16px] py-10 md:text-[17px] px-4 md:px-6 lg:px-12 xl:px-24">{el.description}</div>
                    <div className=" px-4 md:px-6 lg:px-12 xl:px-24 relative">
                        <div className="flex w-full md:w-2/3 items-center justify-center mx-auto">
                            <Image
                                src={el.image}
                                alt="infoSectionImage"
                                layout="fixed"
                                width={1079}
                                height={730}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div className="my-10">
                <Link href={"/about-us"} className="p-3 text-red font-bold border-2 border-red md:px-8 md:text-[18px]">
                    <span className="hover:border-b-2 hover:border-b-red duration-300">{currentInfoSection.btn_text}</span>
                </Link>
            </div>
        </div>
    )
};

export { InfoSection };