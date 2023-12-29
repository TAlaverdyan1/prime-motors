"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { slider } from "@/lib/_data";
import { useLocale } from 'next-intl';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SliderData, SliderItem } from "@/models/models";


const Slider = () => {
    const [currentSlide, setCurrentSlides] = useState<number>(1);
    const [visible, setVisible] = useState<boolean>(true);
    const animatedClasses = visible ? 'fadeIn' : 'fadeOut';
    const locale = useLocale();
    const currentSlider = (slider as SliderData)[locale as keyof SliderData];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide !== currentSlider.length) {
            setCurrentSlides(currentSlide + 1);
        } else {
            setCurrentSlides(1);
        }

        titleAnimations();
    };

    const prevSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlides(currentSlide - 1);
        } else {
            setCurrentSlides(currentSlider.length);
        }

        titleAnimations();
    };

    const moveCircle = (index: number) => {
        setCurrentSlides(index);
        titleAnimations();
    };

    const titleAnimations = () => {
        setVisible(false);
        setTimeout(() => setVisible(true), 1000);
    };


    return (
        <div className='Slider'>
            {
                currentSlider?.map((el: SliderItem, index: number) => {
                    return (
                        <div
                            key={el.id}
                            style={{ backgroundImage: `url(${el.image})` }}
                            className={currentSlide === (index + 1) ? 'slide active' : 'slide'}
                        >
                            <div className={animatedClasses}>
                                <div className='title'>{el.title}</div>
                                <Link href={el.route} className='btn'>{el.btn_text}</Link>
                            </div>
                        </div>
                    )
                })
            }

            <button onClick={nextSlide} className='btn-slide next'>
                <FaChevronRight />
            </button>

            <button onClick={prevSlide} className='btn-slide prev'>
                <FaChevronLeft />
            </button>

            <div className='container-circle'>
                {currentSlider?.map((obj: SliderItem, index: number) => (
                    <div
                        key={obj.id}
                        onClick={() => moveCircle(index + 1)}
                        className={currentSlide === (index + 1) ? 'circle active' : 'circle'}
                    />
                ))}
            </div>
        </div>
    )
}


export { Slider };