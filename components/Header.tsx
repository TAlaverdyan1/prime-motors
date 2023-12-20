"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { IoMenu, IoCloseCircle } from "react-icons/io5";
import { useLanguage } from "./SelectLanguage";
import { navbar } from "@/lib/_data";
import { NavbarItem, NavbarData } from "@/models/models";
import { SelectLanguage } from "./SelectLanguage";

const Header = () => {
    const pathname = usePathname();
    const currentLanguage = useLanguage();
    const [visible, setVisible] = useState<boolean>(false);
    const [showNavBar, setShowNavBar] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const currentNavbar = navbar[currentLanguage as keyof NavbarData];

    window.addEventListener('click', (e: any) => {
        if (showNavBar && !menuRef.current?.contains(e.target)) {
            setShowNavBar(false)
        }
    })

    return (
        <div className="flex justify-between text-center items-center fixed w-full px-4 py-2 border-b border-b-red z-20 shadow-xl bg-white md:px-6 lg:px-12 xl:px-24">

            <Link href={"/"}>
                <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            </Link>

            <div className="flex flex-row-reverse justify-between items-center text-center custom:flex-row">

                <div className={`flex text-[30px] text-red cursor-pointer ml-3 custom:hidden`}>
                    <IoMenu onClick={(e: any) => { e.stopPropagation(); setShowNavBar(!showNavBar); }} />
                </div>

                <div className={`${showNavBar ? "absolute flex flex-col gap-5 top-0 right-0 w-[300px] h-screen py-12 px-5 text-left bg-black text-white z-20"
                    : "hidden justify-center items-center text-center gap-3 mr-3 custom:flex custom:flex-row"}`}
                    ref={menuRef}>
                    {
                        currentNavbar.map((el: NavbarItem) => {
                            const isActive = pathname === el.route;
                            const hasSubtitles = el.subtitles && el.subtitles.length > 0;
                            return (
                                <div
                                    key={el.id}
                                    onMouseMove={() => { hasSubtitles ? setVisible(true) : setVisible(false) }}>
                                    <Link
                                        href={el.route}
                                        className={`text-[18px] font-bold hover:text-red uppercase 
                                        ${(isActive && el.route != "/") ? 'text-red border-b-2 border-b-red' : ''}
                                        ${showNavBar ? " " : "hover:border-b-2 hover:border-b-red hover:duration-300"}`}
                                        onClick={() => setShowNavBar(false)}>
                                        {el.title}
                                    </Link>
                                    {
                                        hasSubtitles && (
                                            <div
                                                onMouseLeave={() => setVisible(false)}
                                                className={` ${visible ? " flex duration-1000" : " hidden"}
                                                    ${showNavBar ? " flex-col bg-red mt-4" : " absolute justify-end w-full top-[95%] right-0 z-10 bg-red shadow-md py-1 px-20 mt-1"}`}>
                                                {el.subtitles?.map((subtitle: NavbarItem, index: number, subtitlesArray: NavbarItem[]) => (
                                                    <Link
                                                        key={subtitle.id}
                                                        href={subtitle.route}
                                                        className=" block py-2 px-4 custom:px-0 uppercase text-[17px] text-[#dbcdcd] hover:text-white hover:duration-700"
                                                    >
                                                        {subtitle.title}
                                                        {index < subtitlesArray.length - 1 && <span className="mx-5 text-white hidden custom:inline">|</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            )
                        }
                        )}

                    {
                        showNavBar ?
                            <div className=" absolute top-3 right-3 text-[30px] cursor-pointer" onClick={() => setShowNavBar(!showNavBar)}>
                                <IoCloseCircle />
                            </div> : " "
                    }
                </div>
                <SelectLanguage />
            </div>
        </div>
    )
};

export { Header };
