'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { BiX ,BiMenuAltRight, BiSearch  } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    function getMenuClasses(){
        let menuClasses = ["transition-all", "duration-700", ];

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
                    "flex-col",
                    "transition-all",
                     "duration-700" 
                ];
            }else{
                menuClasses = [
                    "hidden",
                    "md:flex",
                    "transition-all",
                     "duration-700" 
                ]
            }
        return menuClasses.join(" ")
    }
    return ( 
    <nav className="sticky top-0 shadow-xl  z-30 bg-white p-3 sm:p-4 md:justify-between md:items-center transition-all duration-700 ">
        <div className="container mx-auto flex justify-between items-center transition-all duration-700 ">

            <Link href={'#'} className="text-2xl font-bold"> <Image alt="logo" src="/assets/logo.svg" width={150} height={150}></Image> </Link>

            <div className={`transition-all duration-700 ${getMenuClasses()}`}>
                <Link href={'/'} className={`mx-2 transition-all duration-300 hover:text-[#b88c5d] ${pathname === '/' ? 'text-[#b88c5d]' : ''}`}>
                    Home
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Pages
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Services
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Project
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Blog
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                    Contact
                </Link>
                <Link href={'/'} className="mx-2 transition-all duration-300 hover:text-[#b88c5d]">
                     <BiSearch className="text-2xl hidden md:block" />
                </Link>
            </div>
            
            <div className="md:hidden flex items-center transition-all duration-700 ">
                <button
                className="transition-all duration-700 "
                onClick={()=>{
                    setIsOpen(!isOpen)
                }}
                >
                
                {isOpen ? ( <BiX  className="text-3xl transition-all duration-700 "/> ) : ( <BiMenuAltRight  className="text-3xl transition-all duration-700 "/> )}
                </button>

            </div>


        </div>
   </nav>
     );
}
 
export default Navbar;



{/* <Link href={'#'}>
              </Link> */}