import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { footer, socialLinks } from "@/lib/_data";
import { FooterItem, FooterData } from "@/models/models";

const Footer = () => {
    const locale = useLocale();

    const currentFooter = (footer as FooterData)[locale as keyof FooterData];


    return (
        <div className=" flex flex-col justify-between items-center px-4 py-6 gap-2 border-t border-t-red bg-black md:flex-row md:px-6 lg:px-12 xl:px-24">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            <div className="flex-col justify-center text-center text-white text-[17px]">
                {
                    currentFooter.map((el: FooterItem) => (
                        <div key={el.id}>
                            {el.title}
                        </div>
                    ))
                }
                <div className=" flex justify-center text-center text-[24px] gap-2 pt-1">
                    <Link href={socialLinks.facebook[0]?.route} target="_blank" className=" cursor-pointer hover:text-red"><FaFacebookF /></Link>
                    <Link href={socialLinks.instagram[0]?.route} target="_blank" className=" cursor-pointer hover:text-red"><AiFillInstagram /></Link>
                </div>
            </div>
        </div>
    )
};

export { Footer };