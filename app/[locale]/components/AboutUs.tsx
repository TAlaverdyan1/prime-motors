import Image from "next/image";
import { useLocale } from "next-intl";
import { aboutUsSection } from "@/lib/_data";
import { AboutUsInfoSection, AboutUsSectionContent } from "@/models/models";


const AboutUs = () => {
    const locale = useLocale();

    const currentAboutUsSection = (aboutUsSection as AboutUsInfoSection)[locale as keyof AboutUsInfoSection];


    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4">{currentAboutUsSection?.title}</div>
            <div className=" custom:mt-20 mb-4 md:mb-6">
                {
                    currentAboutUsSection?.content.map((el: AboutUsSectionContent) => (
                        <div key={el.id} className={` block custom:flex items-center custom:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] md:px-6 lg:px-12 xl:px-24">{el.description}</div>
                            <div className="w-full custom:w-1/2 px-4 md:px-6 custom:px-0 relative">
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