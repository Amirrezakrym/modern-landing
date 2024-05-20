'use client'
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import Slider from "@/components/slider/slider";
// icon
import { FaArrowRight } from "react-icons/fa6";
import { PiCompassTool,PiMagicWand,PiToolbox,PiPhoneFill} from "react-icons/pi";


// font
const titleFont = localFont({src : '../public/assets/Fonts/DMSerifDisplay-Regular.ttf'})

export default function Home() {
  return (
   <main className="mx-auto bg-slate-400">
   

    {/* grid image */}
    <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-[1]"></div>
    
    {/* home-banner */}
    <section className="bg-home-banner h-[640px] xl:h-[740px] bg-center lg:bg-cover bg-no-repeat bg-fixed md:rounded-bl-[150px] xl:rounded-bl-[290px] relative z-20">
      
      <div className="container  mx-auto h-full flex items-center text-center xl:justify-start">

        <div className="w-[567px] md:ml-5 flex flex-col items-center text-center md:text-left md:items-start">
          <h1 className={`${titleFont.className} text-4xl md:text-6xl mb-8`}>Let Your Home Be Unique</h1>
          <p className="mb-8"> There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
          <button className="tracking-wide group mx-auto md:mx-0 bg-black text-white hover:text-black p-4 rounded-xl  after:bg-[#b88c5d] font-medium z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Get free estimation <FaArrowRight  className="inline group-hover:text-black duration-700 text-[#b88c5d]"/></button>
        </div>
      
      </div>
    </section>

    {/* About Us */}
    <section className="mt-20 relative z-20">
      <div className="container mx-auto flex justify-center items-start">

      <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto text-black'>    

              <div className="flex flex-col items-center justify-center mx-auto text-center">
                <PiCompassTool  className="text-[#b88c5d] text-5xl mb-4 transition ease-in hover:scale-125"/>
                <h3 className={`${titleFont.className} text-2xl mb-5`}>
                  Project Planning
                </h3>
                <p className="mb-4 max-w-md mx-auto px-4 w-4/5">
                There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link href={"#"} className='group transition-all duration-300 hover:text-[#b88c5d]'>
                  Read more <FaArrowRight  className="inline text-[#b88c5d] transition-all duration-300 group-hover:text-black"/>
                </Link>
              </div>

              <div className="flex my-8 lg:my-0 flex-col items-center justify-center mx-auto text-center">
                <PiMagicWand   className="text-[#b88c5d] text-5xl mb-4 transition ease-in hover:scale-125"/>
                <h3 className={`${titleFont.className} text-2xl mb-5`}>
                  Gaining Materials
                </h3>
                <p className="mb-4 max-w-md mx-auto px-4 w-4/5">
                There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link href={"#"} className='group transition-all duration-300 hover:text-[#b88c5d]'>
                  Read more <FaArrowRight  className="inline text-[#b88c5d] transition-all duration-300 group-hover:text-black"/>
                </Link>
              </div>
        
              <div className="flex flex-col items-center justify-center mx-auto text-center">
                <PiToolbox   className="text-[#b88c5d] text-5xl mb-4 transition ease-in hover:scale-125"/>
                <h3 className={`${titleFont.className} text-2xl mb-5`}>
                  Project Execution
                </h3>
                <p className="mb-4 max-w-md mx-auto px-4 w-4/5">
                There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link href={"#"} className='group transition-all duration-300 hover:text-[#b88c5d]'>
                  Read more <FaArrowRight  className="inline text-[#b88c5d] transition-all duration-300 group-hover:text-black"/>
                </Link>
              </div>
       
          </div>
        
        </div> 
    </section>


    {/* Contact US */}
    <section className="mt-20 relative z-20">
      <div className="container mx-auto ">
          <div className="flex flex-col px-10 lg:flex-row text-center lg:text-left justify-between items-center gap-5">

            <div className=" order-2 lg:order-none lg:max-w-[410px] flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-3xl md:text-4xl`}>
                 We Create The Art Of Stylish Living Stylishly
              </h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
                when lookings at its layouts the points of using 
                that it has a more-or-less normal.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex justify-center items-center bg-[#eddfd1] w-20 h-20 rounded-full">
                  <PiPhoneFill  className="text-[#b88c5d] text-4xl "/>
                </div>

                <div className="text-left">
                    <div className="text-xl md:text-2xl font-bold">09399671609</div>
                    <div>Call Us Anytime</div>
                </div>
              </div>

              <button className="tracking-wide group mx-auto md:mx-0 bg-black text-white hover:text-black p-4 rounded-xl  after:bg-[#b88c5d] font-medium z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Get free estimation <FaArrowRight  className="inline group-hover:text-black duration-700 text-[#b88c5d]"/></button>
        
            </div>


            <div className="order-1 lg:order-none max-w-[453px] mx-auto lg:max-w-none lg:mx-0"><Image className="" alt="Contact" src={'/assets/Contact.png'} width={453} height={200}></Image></div>
          </div>
      </div>
    </section>

    {/* slider */}

    <section className="mt-20 relative z-20">
      <div className="container mx-auto bg-[#eddfd1] rounded-[3.5rem] p-5 py-20 pb-36">
        <div className={`${titleFont.className} text-4xl md:text-6xl mb-8 text-center`}>What clients say</div>
        <Slider/>
      </div>
    </section>

<div className="h-[3000px]"></div>``

   </main>
  );
}
