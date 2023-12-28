import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { partnersSection } from "@/lib/_data";
import { PartnersInfoSection, PartnersSectionContent } from "@/models/models";


const Partners = () => {
    const locale = useLocale();

    const currentPartnersSection = (partnersSection as PartnersInfoSection)[locale as keyof PartnersInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentPartnersSection.title}</div>
            <div className=" custom:mt-20 mb-4 md:mb-6">
                {
                    currentPartnersSection?.content.map((el: PartnersSectionContent) => (
                        <div key={el.id} className={` block custom:flex items-center custom:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className=" text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] md:px-6 lg:px-12 xl:px-24">
                                <div className=" mb-8">
                                    <div className=" text-[20px] font-bold text-red m-3 px-4 capitalize">{el.subtitle}</div>
                                    {el.description}
                                </div>
                                <Link
                                    className=" p-3 text-red font-bold border-2 border-red md:px-8 md:text-[18px]"
                                    href={el.link}>
                                    <span className=" hover:border-b-2 hover:border-b-red duration-300">{el.btn_text}</span>
                                </Link>
                            </div>
                            <div className="w-full custom:w-1/2 px-4 md:px-6 custom:px-0 relative">
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