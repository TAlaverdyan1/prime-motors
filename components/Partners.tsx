"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./SelectLanguage";
import { partnersSection } from "@/lib/_data";
import { PartnersInfoSection, PartnersSectionContent } from "@/models/models";


const Partners = () => {
    const currentLanguage = useLanguage();

    const currentPartnersSection = partnersSection[currentLanguage as keyof PartnersInfoSection];


    return (
        <div className=" mt-20">
            <div className="text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4">{currentPartnersSection.title}</div>
            <div className=" mdbl:mt-20 mb-4 md:mb-6">
                {
                    currentPartnersSection?.content.map((el: PartnersSectionContent) => (
                        <div key={el.id} className={` block mdbl:flex items-center mdbl:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className=" text-center px-4 py-10 mdbl:w-1/2 md:px-6 lg:px-12 xl:px-24">
                                <div className=" mb-8">
                                    <div className="text-[17px] md:text-[18px] font-bold text-red mt-[-7px] mb-3 px-4 capitalize">{el.subtitle}</div>
                                    <span className=" text-[16px]">{el.description}</span>
                                </div>
                                <Link
                                    className=" p-3 text-red font-bold border-2 border-red md:px-8 md:text-[18px]"
                                    href={el.link}
                                    target="_blank">
                                    <span className=" hover:border-b-2 hover:border-b-red duration-300">{el.btn_text}</span>
                                </Link>
                            </div>
                            <div className="w-full mdbl:w-1/2 px-4 md:px-6 mdbl:px-0 relative">
                                <Image
                                    src={el.image}
                                    alt="partnerImg"
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

export { Partners };