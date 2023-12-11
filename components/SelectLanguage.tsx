"use client";
import { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';


export function SelectLanguage() {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');
    const [showSelector, setShowSelector] = useState<boolean>(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);

    const onChangeSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const selectedLanguage = (e.target as HTMLDivElement).innerText.toLowerCase();
        localStorage.setItem('primeMotors-Language', selectedLanguage);
        sessionStorage.clear();
        window.location.reload();
    };

    return (
        <div
            className="flex items-center px-[4px] py-[6px] cursor-pointer relative"
            onMouseMove={() => setShowSelector(true)}
            onMouseLeave={() => setShowSelector(false)}
        >
            <div className="capitalize text-[18px] font-bold">{currentLanguage}</div>
            <div
                className={`absolute top-[100%] w-[100%] left-0 text-center text-[17px] capitalize bg-gray-200  dropdown ${showSelector ? 'activeSelectLang' : ''
                    }`}
                onClick={onChangeSelect}
            >
                <div className="flex justify-center items-center px-[3px] py-1 border-b-gray-300 border-b hover:text-red">
                    en
                </div>
                <div className="flex justify-center items-center px-[3px] py-1 border-b-gray-300 border-b hover:text-red">
                    ru
                </div>
                <div className="flex justify-center items-center px-[3px] py-1 hover:text-red">am</div>
            </div>
            <div className="ml-1">
                <FaAngleDown />
            </div>
        </div>
    );
}
