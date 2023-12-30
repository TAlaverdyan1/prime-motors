import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { homepageInfoSection } from "@/lib/_data";
import { HomepageInfoSection, InfoSectionContent } from "@/models/models";


const InfoSection = () => {
    const locale = useLocale();

    const currentInfoSection = (homepageInfoSection as HomepageInfoSection)[locale as keyof HomepageInfoSection];

    return (
        <div className="mt-20">
            <div className="text-[18px] text-red font-bold md:text-[30px] uppercase text-center px-4">{currentInfoSection?.title}</div>
            {currentInfoSection?.content.map((el: InfoSectionContent) => (
                <div key={el.id}>
                    <div className="text-cente text-[16px] py-10 px-4 md:px-6 lg:px-12 xl:px-24">{el.description}</div>
                    <div className=" px-4 md:px-6 lg:px-12 xl:px-24 relative">
                        <div className="flex w-full items-center justify-center mx-auto">
                            <Image
                                src={el.image}
                                alt="infoSectionImage"
                                layout="fixed"
                                width={1920}
                                height={1200}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div className="my-10">
                <Link href={`/${locale}/about-us`} className="p-3 text-red font-bold border-2 border-red md:px-8 md:text-[18px]">
                    <span className="hover:border-b-2 hover:border-b-red duration-300">{currentInfoSection.btn_text}</span>
                </Link>
            </div>
        </div>
    )
};

export { InfoSection };