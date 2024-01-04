import Image from "next/image";
import { useLocale } from "next-intl";
import { servicesSection } from "@/lib/_data";
import { ServicesInfoSection, ServicesSectionContent } from "@/models/models";

const Services = () => {
    const locale = useLocale();

    const currentServicesSection = (servicesSection as ServicesInfoSection)[locale as keyof ServicesInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4">{currentServicesSection.title}</div>
            <div className=" mdbl:mt-20 mb-4 md:mb-6">
                {
                    currentServicesSection?.content.map((el: ServicesSectionContent) => (
                        <div key={el.id} className={` block mdbl:flex items-center mdbl:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="text-center px-4 py-10 mdbl:w-1/2 md:px-6 lg:px-12 xl:px-24">
                                <div className=" text-[17px] md:text-[18px] font-bold text-red mt-[-7px] mb-3 px-4 capitalize">{el.subtitle}</div>
                                <span className=" text-[16px]">{el.description}</span>
                            </div>
                            <div className="w-full mdbl:w-1/2 px-4 md:px-6 mdbl:px-0 relative">
                                <Image
                                    src={el.image}
                                    alt="servicesImg"
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

export { Services };