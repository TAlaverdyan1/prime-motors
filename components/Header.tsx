"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { IoMenu, IoCloseCircle } from "react-icons/io5";
import { FaAngleDown } from 'react-icons/fa';
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


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleClickOutside = (e: any) => {
                if (showNavBar && !menuRef.current?.contains(e.target)) {
                    setShowNavBar(false);
                }
            };
            window.addEventListener('click', handleClickOutside);

            return () => {
                window.removeEventListener('click', handleClickOutside);
            };
        }
    }, [showNavBar]);

    const isCustomMedia = () => {
        return typeof window !== 'undefined' && window.innerWidth > 1110;
    };

    return (
        <div className="flex justify-between text-center items-center fixed w-full px-4 py-2 border-b border-b-red z-20 shadow-xl bg-white md:px-6 lg:px-12 xl:px-24">

            <Link href={"/"}>
                <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            </Link>

            <div className="flex flex-row-reverse justify-between items-center text-center custom:flex-row">

                <div className={`flex text-[30px] text-red cursor-pointer ml-3 custom:hidden`}>
                    <IoMenu onClick={(e: any) => { e.stopPropagation(); setShowNavBar(!showNavBar); }} />
                </div>

                <div className={`${showNavBar ? "absolute flex flex-col gap-5 top-0 right-0 w-[300px] h-screen py-16 px-5 text-left bg-black text-white z-20"
                    : "hidden justify-center items-center text-center gap-3 mr-3 custom:flex custom:flex-row"}`}
                    ref={menuRef}>
                    {
                        currentNavbar.map((el: NavbarItem) => {
                            const isActive = pathname === el.route;
                            const hasSubtitles = el.subtitles && el.subtitles.length > 0;
                            return (
                                <div
                                    key={el.id}
                                    onMouseMove={() => { isCustomMedia() && (hasSubtitles ? setVisible(true) : setVisible(false)); }}
                                    onClick={() => { !isCustomMedia() && (hasSubtitles && setVisible(!visible)) }}>
                                    {hasSubtitles ? (
                                        <div
                                            className={`text-[18px] font-bold hover:text-red uppercase cursor-pointer group/subtitles 
                                            ${(isActive && el.route != "/") ? 'text-red border-b-2 border-b-red' : ''}`}>
                                            <span className={` ${showNavBar ? "flex justify-between " : "hover:border-b-2 hover:border-b-red hover:duration-300"}`}>{el.title}
                                                {hasSubtitles && <span className=" flex custom:hidden text-white items-center group-hover/subtitles:text-red"><FaAngleDown /></span>}
                                            </span>
                                        </div>
                                    ) : (
                                        <Link
                                            href={el.route}
                                            className={`text-[18px] font-bold hover:text-red uppercase group/subtitles 
                                            ${(isActive && el.route != "/") ? 'text-red border-b-2 border-b-red' : ''}`}
                                            onClick={() => setShowNavBar(false)}>
                                            <span className={` ${showNavBar ? "flex justify-between " : "hover:border-b-2 hover:border-b-red hover:duration-300"}`}>
                                                {el.title}
                                            </span>
                                        </Link>
                                    )}
                                    {
                                        hasSubtitles && (
                                            <div
                                                onMouseLeave={() => { isCustomMedia() && setVisible(false); }}
                                                className={` ${visible ? " flex" : " hidden"}
                                                    ${showNavBar ? " flex-col bg-red mt-4" : " absolute justify-end w-full top-[95%] right-0 z-10 bg-red shadow-md py-1 px-20 mt-1"}`}>
                                                {el.subtitles?.map((subtitle: NavbarItem, index: number, subtitlesArray: NavbarItem[]) => (
                                                    <Link
                                                        key={subtitle.id}
                                                        href={subtitle.route}
                                                        onClick={() => setShowNavBar(false)}
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
                            <div className=" absolute top-4 right-4 text-[30px] cursor-pointer" onClick={() => setShowNavBar(!showNavBar)}>
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
