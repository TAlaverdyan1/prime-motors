"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { branchesSection } from "@/lib/_data";
import { BranchesInfoSection, BranchesSectionItem } from "@/models/models";


const Branches = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentBranchesSection = branchesSection[currentLanguage as keyof BranchesInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);



    return (
        <div className=" mt-20">
            <div className=" text-red font-bold text-[30px] capitalize text-center px-4">{currentBranchesSection?.title}</div>
            {
                currentBranchesSection?.content.map((el: BranchesSectionItem) => (
                    <div key={el.id} className={` block custom:flex items-center mt-8 ${el.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="text-center text-[16px] px-4 py-10 custom:w-1/2 md:text-[17px] lg:px-12 xl:px-24">
                            <div className=" text-[20px] font-bold text-red m-3 capitalize">{el.subtitle}</div>
                            {el.description}
                        </div>
                        <div className="w-full custom:w-1/2 h-[600px] relative"><Image src={el.image} alt="aboutUsSectionImg" fill className=" object-cover" /></div>
                    </div>
                ))
            }
        </div>
    )
}

export { Branches };