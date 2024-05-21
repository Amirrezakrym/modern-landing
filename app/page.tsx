'use client'
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import Slider from "@/components/slider/slider";
// icon
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { PiCompassTool,PiMagicWand,PiToolbox,PiPhoneFill,PiCaretRightBold } from "react-icons/pi";


// font
const titleFont = localFont({src : '../public/assets/Fonts/DMSerifDisplay-Regular.ttf'})

export default function Home() {
  return (
   <main className="mx-auto">
   
    {/* home-banner */}
    <section className="bg-home-banner h-[640px] xl:h-[740px] bg-center lg:bg-cover bg-no-repeat bg-fixed md:rounded-bl-[150px] xl:rounded-bl-[290px] relative z-20">
      
      <div className="container mx-auto h-full flex items-center justify-center sm:justify-start ">
      
        <div className="max-w-md md:ml-5 flex flex-col items-center text-center sm:text-left sm:items-start">
          <h1 className={`${titleFont.className} text-4xl sm:text-6xl mb-8`}>Let Your Home Be Unique</h1>
          <p className="mb-8 text-[#545656]"> There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
          <button className="tracking-wide group md:mx-0 bg-black text-white hover:text-black p-4 rounded-xl  after:bg-[#b88c5d] font-medium z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Get free estimation <FaArrowRight  className="inline group-hover:text-black duration-700 text-[#b88c5d]"/></button>
        </div>
      
      </div>
    </section>

    {/* About Us */}
    <section className="mt-40">
      <div className="container mx-auto flex justify-center items-start">

      <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto text-black'>    

              <div className="flex flex-col items-center justify-center mx-auto text-center">
                <PiCompassTool  className="text-[#b88c5d] text-5xl mb-4 transition ease-in hover:scale-125"/>
                <h3 className={`${titleFont.className} text-2xl mb-5`}>
                  Project Planning
                </h3>
                <p className="mb-4 max-w-md mx-auto px-4 w-4/5 text-[#545656]">
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
                <p className="mb-4 max-w-md mx-auto px-4 w-4/5 text-[#545656]">
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
                <p className="mb-4 max-w-md mx-auto px-4 w-4/5 text-[#545656]">
                There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link href={"#"} className='group transition-all duration-300 hover:text-[#b88c5d]'>
                  Read more <FaArrowRight  className="inline text-[#b88c5d] transition-all duration-300 group-hover:text-black"/>
                </Link>
              </div>
       
          </div>
        
        </div> 
    </section>

    {/* Contact US */}
    <section className="mt-40">
      <div className="container mx-auto ">
          <div className="flex flex-col px-16 lg:flex-row text-center lg:text-left justify-between items-center gap-5">

            <div className=" order-2 lg:order-none max-w-xs xl:max-w-md flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-3xl md:text-4xl`}>
                 We Create The Art Of Stylish Living Stylishly
              </h2>
              <p className="max-w-xs text-[#545656]">It is a long established fact that a reader will be distracted by the of readable content of a page 
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
    <section className="mt-40">
      <div className="container mx-auto bg-[#eddfd1] rounded-[3.5rem] p-5 py-10 pb-22">
        <div className={`${titleFont.className} text-4xl md:text-6xl mb-8 text-center max-w-md md:max-w-2xl mx-auto`}>What the People Thinks About Us</div>
        <Slider/>
      </div>
    </section>

    {/* Brand */}
    <section className="mt-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-around gap-12 lg:flex-row">
          <Image alt="brand" src={'/assets/brands/01.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/assets/brands/02.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/assets/brands/03.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/assets/brands/04.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/assets/brands/05.svg'} width={100} height={100}></Image>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="mt-40">
      <div className="container mx-auto">

        <div className="flex flex-col justify-center items-center gap-5 text-center mb-10">
          <h1 className={`${titleFont.className} text-3xl md:text-5xl`}>Follow Our Projects</h1>
          <p className="mb-4 max-w-xl mx-auto px-4 text-[#545656]">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">

        <div className="flex p-4 flex-col items-center justify-center mx-auto">

          <div className=" max-w-[548] h-full mx-auto">
            <Image width={500} height={500} className="" alt="Contact" src='/assets/Projects/01.png'  />
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-5">

            <div>
              <h3 className={`${titleFont.className} text-xl md:text-2xl`}>Modern Kitchan</h3>
              <p className="text-[#545656]">Decor/Architecture</p>
            </div>

            <button className="flex justify-center items-center bg-[#eddfd1] w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
            </button>
          </div>
          
        </div>

        <div className="flex p-4 flex-col items-center justify-center mx-auto">

          <div className="w-full max-w-[548] h-full mx-auto">
            <Image width={500} height={500} className="" alt="Contact" src='/assets/Projects/02.png'  />
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-5">

            <div>
              <h3 className={`${titleFont.className} text-xl md:text-2xl`}>Modern Kitchan</h3>
              <p className="text-[#545656]">Decor/Architecture</p>
            </div>

            <button className="flex justify-center items-center bg-[#eddfd1] w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
            </button>
          </div>
          
        </div>

        <div className="flex p-4 flex-col items-center justify-center mx-auto">

          <div className="w-full max-w-[548] h-full mx-auto">
            <Image width={500} height={500} className="" alt="Contact" src='/assets/Projects/03.png'  />
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-5">

            <div>
              <h3 className={`${titleFont.className} text-xl md:text-2xl`}>Modern Kitchan</h3>
              <p className="text-[#545656]">Decor/Architecture</p>
            </div>

            <button className="flex justify-center items-center bg-[#eddfd1] w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
            </button>
          </div>
          
        </div>

        <div className="flex p-4 flex-col items-center justify-center mx-auto">

          <div className="w-full max-w-[548] h-full mx-auto">
            <Image width={500} height={500} className="" alt="Contact" src='/assets/Projects/04.png'  />
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-5">

            <div>
              <h3 className={`${titleFont.className} text-xl md:text-2xl`}>Modern Kitchan</h3>
              <p className="text-[#545656]">Decor/Architecture</p>
            </div>

            <button className="flex justify-center items-center bg-[#eddfd1] w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
            </button>
          </div>
          
        </div>

      </div>
    </div>
    </section>

    {/* Counter */}
    <section className="mt-40 bg-[#eddfd1] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="text-center lg:border-r lg:border-[#b88c5d]">
            <h3 className={`${titleFont.className} text-4xl md:text-6xl text-[#b88c5d]`}>12</h3>
            <p className="text-[#545656] mt-3">Years Of Experience</p>
          </div>
          <div className="text-center lg:border-r lg:border-[#b88c5d]">
            <h3 className={`${titleFont.className} text-4xl md:text-6xl text-[#b88c5d]`}>86</h3>
            <p className="text-[#545656] mt-3">Success Project</p>
          </div>
          <div className="text-center lg:border-r lg:border-[#b88c5d]">
            <h3 className={`${titleFont.className} text-4xl md:text-6xl text-[#b88c5d]`}>15</h3>
            <p className="text-[#545656] mt-3">Active Projects</p>
          </div>
          <div className="text-center">
            <h3 className={`${titleFont.className} text-4xl md:text-6xl text-[#b88c5d]`}>95</h3>
            <p className="text-[#545656] mt-3">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>

    {/* Articles & news */}
    <section className="mt-40">
      <div className="container mx-auto">
        
        <div className="flex flex-col justify-center items-center gap-5 text-center mb-10">
          <h1 className={`${titleFont.className} text-3xl md:text-5xl`}>Articles & News</h1>
          <p className="mb-4 max-w-xl mx-auto px-4 text-[#545656]">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-10">

          <div className=" w-full max-w-[382px] h-[480px] sm:h-[500px] border rounded-[2rem] p-5 transition-all duration-700 hover:bg-[#eddfd1] group cursor-pointer mx-auto">
            <Image src="/assets/news/01.png" alt="" width={500} height={500} />
            <div>
              <h3 className={`${titleFont.className} text-2xl md:text-2xl my-3`}>Let’s Get Solution For Building Construction Work</h3>
              <div className="flex justify-between items-center ">
                <p className="text-[#545656]">00 December,2... </p>
                <button className="flex justify-center items-center bg-[#eddfd1] group-hover:bg-white transition-all duration-700  w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
                </button>
              </div>
            </div>
          </div>

          <div className=" w-full max-w-[382px] h-[480px] sm:h-[500px] border rounded-[2rem] p-5 transition-all duration-700 hover:bg-[#eddfd1] group cursor-pointer mx-auto">
            <Image src="/assets/news/02.png" alt="" width={500} height={500} />
            <div>
              <h3 className={`${titleFont.className} text-2xl md:text-2xl my-3`}>Low Cost Latest Invented Interior Designing</h3>
              <div className="flex justify-between items-center ">
                <p className="text-[#545656]">00 December,2... </p>
                <button className="flex justify-center items-center bg-[#eddfd1] group-hover:bg-white transition-all duration-700  w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
                </button>
              </div>
            </div>
          </div>

          <div className=" w-full max-w-[382px] h-[480px] sm:h-[500px] border rounded-[2rem] p-5 transition-all duration-700 hover:bg-[#eddfd1] group cursor-pointer mx-auto">
            <Image src="/assets/news/03.png" alt="" width={500} height={500} />
            <div>
              <h3 className={`${titleFont.className} text-2xl md:text-2xl my-3`}>Best For Any Office & Business Interior </h3>
              <div className="flex justify-between items-center ">
                <p className="text-[#545656]">00 December,2... </p>
                <button className="flex justify-center items-center bg-[#eddfd1] group-hover:bg-white transition-all duration-700  w-14 h-14 rounded-full">
                  <PiCaretRightBold   className="text-black text-2xl "/>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Join US */}
    <section className="mt-40">
      <div className="container mx-auto">
        <div className="bg-[#282F37] rounded-[3.5rem] py-[5rem] mx-[3rem]">
          <div className="flex flex-col justify-center items-center"> 
            <h2 className={`${titleFont.className} text-2xl md:text-4xl mb-4 text-white`}>Wannato join the Amir.Co?</h2>
            <p className="text-white mb-8 max-w-sm">It is a long established fact will be distracted.</p>
          <button className="shadow-2xl tracking-wide group mx-auto md:mx-0 bg-[#b88c5d] text-white hover:text-white p-4 rounded-xl  after:bg-black font-medium z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Contact With Us <FaArrowRight  className="inline group-hover:text-[#b88c5d] duration-700 text-black"/></button>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <section className="mt-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mx-auto justify-between px-10 items-center">

          <div className="mb-8 text-center lg:text-left max-w-sm">
            <Link href={'#'} className="inline-block"> <Image alt="logo" src="/assets/logo.svg" width={150} height={150}></Image> </Link>
            <p className="my-5 text-[#545656]"> It is a long established fact that a reader will be distracted lookings.</p>
            <div className="flex justify-center lg:justify-start items-center gap-10">
            <Link href={'#'}> <FaFacebookF /> </Link>
            <Link href={'#'}> <FaTwitter /> </Link>
            <Link href={'#'}> <FaLinkedinIn /> </Link>
            <Link href={'#'}> <FaInstagram /> </Link>
            </div>
          </div>


          <div className="flex flex-col lg:flex-row  gap-16">

            <div className="flex flex-col text-center lg:text-start gap-3 max-w-sm">
              <Link href={'#'} className={`${titleFont.className} text-xl md:text-2xl`}>Pages</Link>
              <Link href={'#'} className="text-[#545656]">About Us</Link>
              <Link href={'#'} className="text-[#545656]">Our Project</Link>
              <Link href={'#'} className="text-[#545656]">Our Team</Link>
              <Link href={'#'} className="text-[#545656]">Contact Us</Link>
              <Link href={'#'} className="text-[#545656]">Servies</Link>
            </div>

            <div className="flex flex-col text-center lg:text-start gap-3 max-w-sm">
              <Link href={'#'} className={`${titleFont.className} text-xl md:text-2xl`}>Services</Link>
              <Link href={'#'} className="text-[#545656]">Kitchen</Link>
              <Link href={'#'} className="text-[#545656]">Living Area</Link>
              <Link href={'#'} className="text-[#545656]">Bathroom</Link>
              <Link href={'#'} className="text-[#545656]">Dinning Hall</Link>
              <Link href={'#'} className="text-[#545656]">Bedroom</Link>
            </div>

            <div className="flex flex-col text-center lg:text-start gap-3 max-w-48">
              <div className={`${titleFont.className} text-xl md:text-2xl`}>Contact</div>
              <div className="text-[#545656]">55 East Birchwood Ave. Brooklyn, New York 11201</div>
              <div className="text-[#545656]">Amirrezakrym@gmail.com</div>
              <div className="text-[#545656]">(000) 000 - 0000</div>
            </div>

          </div>

        </div>
        <p className="mx-auto text-center mt-20 py-5 text-[#545656]">Copyright ⓒ Amir.Co |Designed by Amirreza</p>
      </div>
    </section>

   </main>
  );
}
