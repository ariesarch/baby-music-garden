'use client'
import photoData from '@/data/photos'
import Image from "next/image";
import { useEffect, useRef } from 'react';

export const FlipBook = () => {
    // const photos = usePhotoStore((state) => state.photos);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startAutoFlip();
        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        };
    }, []);

    const startAutoFlip = () => {
        intervalRef.current = setInterval(() => {
            const currentPage = document.querySelector('.z-50');
            const nextPage = currentPage?.nextElementSibling || document.querySelector('.page');
            togglePageFlip(nextPage);
        }, 10000);
    };
    const togglePageFlip = (el: any) => {
        if (el) {
            setAllPagesBack();
            setClickedPageForward(el);
            el.classList.toggle('turn');
        }
    };

    const setAllPagesBack = ()=> {
        var pages = document.getElementsByClassName("page");
        for (var i = 0; i < pages.length; i++) {
            pages[i].classList.remove('z-50');
        }
    }

    const setClickedPageForward = (el:any)=> {
        el.classList.add('z-50');
    }
    return (
            <div className="perspective text-white  w-full h-full flex justify-end flex-grow">
                {photoData.map((photo:any,index:number)=> (
                <div key={index}  className="page absolute duration-1000 flex items-end origin-left w-[44.5%] transition h-[68.5%] transform" data-page="1" onClick={(e) => togglePageFlip(e.currentTarget)}>
                    <div className="front flex flex-col items-start justify-center px-2 sm:px-5 md:px-20 font-bold absolute right-0 w-full h-full">
                    {/* Welcome to this Page {photoData.length}
                        <p className="text-sm text-gray-500">Click me to open</p> */}
                        {/* <Image src={photo.front} alt={photo.front} width={200} height={200} /> */}
                            <img
                                src={photo.front}
                                alt={photo.front}
                                className='object-contain'
                                style={{ width: '90%', height: '90%' }}
                            />

                    </div>
                    <div className="back font-bold flex items-center justify-end px-2 sm:px-5 md:px-20 absolute w-full h-full">
                        {/* {photo.front} */}
                        {/* <Image src={photo.back} alt={photo.back} width={200} height={200} /> */}
                            <img
                                src={photo.back}
                                alt={photo.back}
                                className='object-contain'
                                style={{ width: '90%', height: '90%' }}
                            />

                    </div>
                </div>
                ))}
                {/* <div className="bg-orange-300 page absolute duration-1000 flex items-end origin-left w-[44.5%] transition h-[68.5%] transform" data-page="2" onClick={(e) => togglePageFlip(e.currentTarget)}>
                    <div className="front text-xl sm:text-3xl md:text-5xl flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-gray-900 absolute right-0 w-full h-full">
                        Page 3
                    </div>
                    <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 absolute w-full h-full">
                        Page 4
                    </div>
                </div>

                <div className="bg-orange-400 page absolute duration-1000 flex items-end origin-left w-[44.5%] transition h-[68.5%] transform" data-page="1" onClick={(e) => togglePageFlip(e.currentTarget)}>
                    <div className="front text-xl sm:text-3xl md:text-5xl flex flex-col items-start justify-center px-2 sm:px-5 md:px-20 font-bold bg-gray-900 absolute right-0 w-full h-full">
                    Welcome to this Page {photoData.length}
                        <p className="text-sm text-gray-500">Click me to open</p>
                    </div>
                    <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 absolute w-full h-full">
                        This is Page 2
                    </div>
                </div> */}
            </div>
    )
}