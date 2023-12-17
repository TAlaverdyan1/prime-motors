"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "./SelectLanguage";
import { slider } from "@/lib/_data";
import { SliderData, SliderItem } from "@/models/models";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const currentLanguage = useLanguage();
    const currentSlider = slider[currentLanguage as keyof SliderData];


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);


    const nextSlide = () => {
        if (currentSlide !== currentSlider.length) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(1);
        }
    };

    const prevSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlide((currentSlide) => (currentSlide - 1) % currentSlider.length);
        } else {
            setCurrentSlide(currentSlider.length);
        }
    };

    const moveCircle = (index: number) => {
        setCurrentSlide(index);
    };


    return (
        <div className=" w-[100%] h-[100vh]">
            {
                currentSlider.map((el: SliderItem) => (
                    <div key={el.id}
                        className={` absolute w-[100%] h-[100vh] text-center flex justify-center items-center gap-6 object-cover flex-col bg-cover bg-no-repeat 
                        bg-center bg-fixed ${currentSlide === el.id ? " opacity-100" : " opacity-0"}`}>
                        <Image src={el.image} alt="sliderImg" fill className="object-cover w-full h-full" />
                        <div className=" text-[1.5rem] px-4 text-white uppercase font-bold md:px-6 md:text-[2rem] lg:px-24 lg:text-[3rem] z-10">
                            {el.title}
                        </div>
                        <Link href={el.route} className=" p-3 bg-red hover:bg-darkRed text-white font-bold md:px-8 md:py-4 md:text-[20px] capitalize z-10">
                            {el.btn_text}
                        </Link>
                    </div>
                ))
            }

            <button
                className=' hidden h-[60px] absolute text-[1.5rem] top-[50%] left-5 font-bold bg-none border-none text-white/60 hover:text-white md:flex'
                onClick={prevSlide}>
                <FaChevronLeft size={30} />
            </button>
            <button
                className=' hidden h-[60px] absolute text-[1.5rem] top-[50%] right-5 font-bold bg-none border-none text-white/60 hover:text-white md:flex'
                onClick={nextSlide}>
                <FaChevronRight size={30} />
            </button>

            <div className=" flex absolute bottom-[30px] left-[50%] translate-x-[-50%]">
                {
                    currentSlider.map((el: SliderItem) => (
                        <div
                            key={el.id}
                            onClick={() => moveCircle(el.id)}
                            className={` w-2 h-2 mx-[3px] rounded-[50%] cursor-pointer ${currentSlide == el.id ? " bg-white" : " bg-white/50"}`}>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export { Slider };