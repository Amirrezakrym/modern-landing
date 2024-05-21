'use client'
import Image from 'next/image';
import localFont from 'next/font/local'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// font
const titleFont = localFont({src : '../../public/assets/Fonts/DMSerifDisplay-Regular.ttf'})

const Slider = () => {
    return (  
        <>
        <Swiper
      pagination={true} 
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
        <div className='flex flex-col justify-center items-center sm:items-start bg-white w-4/5 mx-auto sm:w-auto rounded-xl p-8 py-12'>
        <div className='flex  gap-3 mb-5'>
            <div><Image alt='hero' src={'/assets/hero/04.png'} width={70} height={70}></Image></div>
            <div className='flex flex-col justify-center items-start '>
                <h1 className={`${titleFont.className} text-xl md:text-2xl`}>Natasha Mith</h1>
                <div className='text-sm'>Greenville, USA</div>
            </div>
        </div>
        <p className='max-w-64 text-[14px] sm:text-[16px] text-[#545656]'>Lorem Ipsum is simply dummy 
        text of the typesetting industry. 
        Ipsum has been.
        </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div  className='flex flex-col justify-center items-center sm:items-start bg-white w-4/5 mx-auto sm:w-auto rounded-xl p-8 py-12'>
        <div className='flex justify-start gap-3 mb-5'>
            <div><Image alt='hero' src={'/assets/hero/03.png'} width={70} height={70}></Image></div>
            <div className='flex flex-col justify-center items-start '>
                <h1 className={`${titleFont.className} text-xl md:text-2xl`}>Jessica White</h1>
                <div className='text-sm'>Oak Ridge, USA</div>
            </div>
        </div>
        <p className='max-w-64 text-[14px] sm:text-[16px] text-[#545656]'>Lorem Ipsum is simply dummy 
        text of the typesetting industry. 
        Ipsum has been.
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div  className='flex flex-col justify-center items-center sm:items-start bg-white w-4/5 mx-auto sm:w-auto rounded-xl p-8 py-12'>
        <div className='flex gap-3 mb-5'>
            <div><Image alt='hero' src={'/assets/hero/02.png'} width={70} height={70}></Image></div>
            <div className='flex flex-col justify-center items-start '>
                <h1 className={`${titleFont.className} text-xl md:text-2xl`}>Mike Davis</h1>
                <div className='text-sm'>Berlin, Germany</div>
            </div>
        </div>
        <p className='max-w-64 text-[14px] sm:text-[16px] text-[#545656]'>Lorem Ipsum is simply dummy 
        text of the typesetting industry. 
        Ipsum has been.
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div  className='flex flex-col justify-center items-center sm:items-start bg-white w-4/5 mx-auto sm:w-auto rounded-xl p-8 py-12'>
        <div className='flex gap-3 mb-5'>
            <div><Image alt='hero' src={'/assets/hero/01.png'} width={70} height={70}></Image></div>
            <div className='flex flex-col justify-center items-start '>
                <h1 className={`${titleFont.className} text-xl md:text-2xl`}>Olivia Wilson</h1>
                <div className='text-sm'>Blue Ridge, France</div>
            </div>
        </div>
        <p className='max-w-64 text-[14px] sm:text-[16px] text-[#545656]'>Lorem Ipsum is simply dummy 
        text of the typesetting industry. 
        Ipsum has been.
        </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div  className='flex flex-col justify-center items-center sm:items-start bg-white w-4/5 mx-auto sm:w-auto rounded-xl p-8 py-12'>
        <div className='flex gap-3 mb-5'>
            <div><Image alt='hero' src={'/assets/hero/01.png'} width={70} height={70}></Image></div>
            <div className='flex flex-col justify-center items-start '>
                <h1 className={`${titleFont.className} text-xl md:text-2xl`}>Olivia Wilson</h1>
                <div className='text-sm'>Blue Ridge, France</div>
            </div>
        </div>
        <p className='max-w-64 text-[14px] sm:text-[16px] text-[#545656]'>Lorem Ipsum is simply dummy 
        text of the typesetting industry. 
        Ipsum has been.
        </p>
        </div>
      </SwiperSlide>

    </Swiper>
        </>
      );
}
 
export default Slider;