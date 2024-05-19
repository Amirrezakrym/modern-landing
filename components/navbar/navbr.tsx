'use client'
import Image from "next/image";
import Link from "next/link";
import { BiX ,BiMenuAltRight  } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    function getMenuClasses(){
        let menuClasses = [];

            if(isOpen){
                menuClasses = [
                    "flex",
                    "absolute",
                    "top-[56px]",
                    "bg-white",
                    "w-full",
                    "p-3",
                    "left-0",
                    "gap-5",
                    "flex-col"
                ];
            }else{
                menuClasses = [
                    "hidden",
                    "md:flex"
                ]
            }
        return menuClasses.join(" ")
    }
    return ( 
    <nav className="sticky top-0 shadow-xl  z-30 bg-white p-3 sm:p-4 md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">

            <Link href={'#'} className="text-2xl font-bold"> <Image alt="logo" src="/assets/logo.svg" width={150} height={150}></Image> </Link>

            <div className={getMenuClasses()}>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Home
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    About
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Testimonials
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Our Work
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    News
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Contact
                </Link>
            </div>
            
            <div className="md:hidden flex items-center">
                <button
                onClick={()=>{
                    setIsOpen(!isOpen)
                }}
                >
                
                {isOpen ? ( <BiX  className="text-3xl"/> ) : ( <BiMenuAltRight  className="text-3xl"/> )}
                </button>

            </div>


        </div>
   </nav>
     );
}
 
export default Navbar;



{/* <Link href={'#'}>
              </Link> */}