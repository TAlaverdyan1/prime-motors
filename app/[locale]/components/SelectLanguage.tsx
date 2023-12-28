"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

export function SelectLanguage() {
    const [showSelector, setShowSelector] = useState<boolean>(false);
    const locale = useLocale();
    const path = usePathname();
    const parts = path.split('/');


    return (
        <div
            className="flex items-center px-[4px] py-[6px] cursor-pointer relative group/item"
            onMouseMove={() => setShowSelector(true)}
            onMouseLeave={() => setShowSelector(false)}
        >
            <div className="uppercase text-[18px] font-bold text-gray-900 group-hover/item:text-red group-hover/item:duration-300">
                {locale}
            </div>
            <div
                className={`absolute top-[100%] w-[100%] left-0 text-center text-[17px] uppercase bg-gray-200 dropdown ${showSelector ? 'activeDropdown' : ''}`}
            >
                <Link
                    href={`/en/${parts[2] ? parts[2] : ''}`}
                    locale="en"
                    className="flex justify-center items-center px-[3px] py-1 border-b-gray-300 border-b hover:text-red hover:duration-200"
                >
                    en
                </Link>
                <Link
                    href={`/ru/${parts[2] ? parts[2] : ''}`}
                    locale="ru"
                    className="flex justify-center items-center px-[3px] py-1 border-b-gray-300 border-b hover:text-red hover:duration-200"
                >
                    ru
                </Link>
                <Link
                    href={`/am/${parts[2] ? parts[2] : ''}`}
                    locale="am"
                    className="flex justify-center items-center px-[3px] py-1 hover:text-red hover:duration-200"
                >
                    am
                </Link>
            </div>
            <div className="ml-1 text-gray-900 group-hover/item:text-red group-hover/item:duration-300">
                <FaAngleDown />
            </div>
        </div>
    );
}
