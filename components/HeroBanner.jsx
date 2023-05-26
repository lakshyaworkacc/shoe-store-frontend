import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from "react-icons/bi";
import slide1 from "../public/slide-1.png";
import slide2 from "../public/slide-2.png";
import slide3 from "../public/slide-3.png";
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        className='absolute right-[31px] md:right-[36px] bottom-0 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                        onClick={clickHandler}
                    >
                        <BiArrowBack className='text-sm md:text-lg' />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        className='absolute right-0 bottom-0 w-[3   0px] md:w-[40px] h-[30px] md:h-[40px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                        onClick={clickHandler}
                    >
                        <BiArrowBack className='rotate-180 text-sm md:text-lg' />
                    </div>
                )}
            >
                <div>
                    <Image src={slide1} alt='slide1'/>
                    <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                        Shop Now                    
                    </div>
                </div>
                <div>
                    <Image src={slide2} alt='slide1'/>
                    <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                        Shop Now                    
                    </div>
                </div>
                <div>
                    <Image src={slide3} alt='slide1'/>
                    <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                        Shop Now                    
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default HeroBanner