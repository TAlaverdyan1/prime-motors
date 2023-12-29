import Image from "next/image";
import { useLocale } from "next-intl";
import { ourMissionSection } from "@/lib/_data";
import { OurMissionInfoSection, OurMissionSectionContent } from "@/models/models";


const OurMission = () => {
    const locale = useLocale();

    const currentOurMissionSection = (ourMissionSection as OurMissionInfoSection)[locale as keyof OurMissionInfoSection];


    return (
        <div className=" mt-20">
            <div className="text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4">{currentOurMissionSection.title}</div>
            <div className=" mdbl:mt-20 mb-4 md:mb-6">
                {
                    currentOurMissionSection?.content.map((el: OurMissionSectionContent) => (
                        <div key={el.id} className={` block mdbl:flex items-center mdbl:mt-10 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="text-center text-[16px] px-4 py-10 mdbl:w-1/2 md:px-6 lg:px-12 xl:px-24">{el.description}</div>
                            <div className="w-full mdbl:w-1/2 px-4 md:px-6 mdbl:px-0 relative">
                                <Image
                                    src={el.image}
                                    alt="ourMissionImg"
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
        </div >
    )
};

export { OurMission };
