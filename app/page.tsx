import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import localFont from 'next/font/local'
import Link from "next/link";
const titleFont = localFont({src : '../public/assets/Fonts/DMSerifDisplay-Regular.ttf'})


export default function Home() {
  return (
   <main className="mx-auto bg-slate-400">
   

    {/* grid image */}
    <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>
    
    {/* home-banner */}
    <section className="bg-home-banner h-[640px] xl:h-[740px] bg-center lg:bg-cover bg-no-repeat bg-fixed md:rounded-bl-[150px] xl:rounded-bl-[290px] relative z-20">
      
      <div className="container  mx-auto h-full flex items-center text-center xl:justify-start">

        <div className="w-[567px] md:ml-5 flex flex-col items-center text-center md:text-left md:items-start">
          <h1 className={`${titleFont.className} text-6xl mb-8`}>Let Your Home Be Unique</h1>
          <p className="mb-8"> There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
          <button className="tracking-wide group mx-auto md:mx-0 bg-black text-white hover:text-black p-4 rounded-xl  after:bg-[#b88c5d] font-medium z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Get free estimation <FaArrowRight  className="inline group-hover:text-black duration-700 text-[#b88c5d]"/></button>
        </div>
      
      </div>
    </section>




<div className="h-[3000px]"></div>
   </main>
  );
}
