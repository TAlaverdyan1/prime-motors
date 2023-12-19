"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollTopFunc);
        return () => {
            window.removeEventListener('scroll', scrollTopFunc);
        };
    }, []);

    const scrollTopFunc = () => {
        if (window.scrollY > 400) setShowBtn(true);
        else setShowBtn(false);
    }

    const handlerScrollTopFunc = () => {
        if (window.scrollY > 0) {
            window.scrollTo(0, window.scrollY - 40);
            window.requestAnimationFrame(handlerScrollTopFunc);
        }
    }

    return showBtn && (
        <div className=' fixed bottom-10 right-8 z-10 text-[1.6rem] border-2 border-red rounded-full p-4 text-[#c8c6c6] cursor-pointer hover:bg-red hover:duration-500 hover:text-white'
            onClick={handlerScrollTopFunc}
        >
            <FaArrowUp />
        </div>
    )
}

export { ScrollTop };