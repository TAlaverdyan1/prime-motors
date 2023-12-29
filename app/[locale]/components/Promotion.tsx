import Image from "next/image";
import { useLocale } from "next-intl";
import { promotionSection } from "@/lib/_data";
import { PromotionInfoSection, PromotionSectionContent } from "@/models/models";

const Promotion = () => {
    const locale = useLocale();

    const currentPromotionSection = (promotionSection as PromotionInfoSection)[locale as keyof PromotionInfoSection];
    const numItems = currentPromotionSection?.content.length || 0;

    const gridColumns = numItems === 1 ? "grid-cols-1 max-w-[500px]" : numItems % 2 === 0 ? "md:grid-cols-2 xl:px-48" : " md:grid-cols-2 lg:grid-cols-3 xl:px-24";


    return (
        <div className=" my-20">
            <div className=" text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4">{currentPromotionSection.title}</div>
            <div className={`mt-8 gap-6 py-8 grid p-8 md:px-10 lg:px-12  ${gridColumns}`}>
                {
                    currentPromotionSection?.content.map((el: PromotionSectionContent) => (
                        <div key={el.id}>
                            <div className=" flex flex-col justify-center items-center border-2 border-red rounded py-6">
                                <Image
                                    src={el.image}
                                    width={228}
                                    height={228}
                                    alt="iourMissionSectionImg"
                                    className=" mx-4 px-4" />
                                <div className=" text-center px-4 my-3">
                                    <div className="text-[17px] md:text-[18px] font-bold text-red m-3 capitalize px-4">{el.subtitle}</div>
                                    <span className=" text-[16px]">{el.description}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export { Promotion };