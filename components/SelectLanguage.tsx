"use client";
import { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';


export const useLanguage = (): string => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);

    return currentLanguage;
};


export function SelectLanguage() {
    const currentLanguage = useLanguage() || "en";
    const [showSelector, setShowSelector] = useState<boolean>(false);

    const onChangeSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const selectedLanguage = (e.target as HTMLDivElement).innerText.toLowerCase();
        localStorage.setItem('primeMotors-Language', selectedLanguage);
        sessionStorage.clear();
        window.location.reload();
        window.scrollTo(0, 0);
    };

    return (
        <div
            className="flex items-center px-[4px] py-[6px] cursor-pointer relative group/item"
            onMouseMove={() => setShowSelector(true)}
            onMouseLeave={() => setShowSelector(false)}
        >
            <div className="uppercase text-[18px] font-bold text-gray-900 group-hover/item:text-red group-hover/item:duration-300">{currentLanguage}</div>
            <div
                className={`absolute top-[100%] w-[100%] left-0 text-center text-[17px] uppercase bg-gray-200 dropdown ${showSelector ? 'activeDropdown' : ''
                    }`}
                onClick={onChangeSelect}
            >
                <div className="flex justify-center items-center px-[3px] py-1 border-b-gray-300 border-b hover:text-red hover:duration-200">
                    en
                </div>
                <div className="flex justify-center items-center px-[3px] py-1 border-b-gray-300 border-b hover:text-red hover:duration-200">
                    ru
                </div>
                <div className="flex justify-center items-center px-[3px] py-1 hover:text-red hover:duration-200">am</div>
            </div>
            <div className="ml-1 text-gray-900 group-hover/item:text-red group-hover/item:duration-300">
                <FaAngleDown />
            </div>
        </div>
    )
};