import { useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/16/solid"
import Logo from "../../assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "../../shared/type"
import useMediaQuery from "../../hooks/useMediaQuery"
import ActionButton from "../../shared/ActionButton"



type Props = {
    isTopOfPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void
}

const Navbar=({selectedPage,setSelectedPage,isTopOfPage}: Props)=> {
        const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false)
        const navbarBackground= isTopOfPage ? "": "bg-red-100 drop-shadow"
       
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  return (
    <nav> 
        <div className={` ${ navbarBackground}  flex items-center justify-between fixed top-0 z-30 w-full py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <div className="flex items-center justify-between  w-full gab-16">
                    {/* left side  */}
                    <img alt="logo" src={Logo}/>
                        {/*  right side */}
                   {isAboveMediumScreens ? (
                   <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-between gap-8 text-sm">
                            <Link 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page="Home">      
                            </Link>
                            <Link page="Benefits"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                            ></Link>
                            <Link page="Classes"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                            ></Link>
                            <Link page="Contact us"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                            ></Link>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>
                    </div> ):
                        (
                            <button className="rounded-full bg-yellow-500 p-2"
                            onClick={()=>setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
                            </button>
                        )}
                </div>
            </div>
        </div>
 {/* mobile menu modal */}
{!isAboveMediumScreens && isMenuToggled && (
 <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-yellow-100 drop-shadow-xl">
    {/* close ıcon  */}
    <div className="flex justify-end p-1">
        <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
        </button>
    </div>
    {/* menu items  */}
    <div className="ml-[33%] flex flex-col gap-10 text-xl">
                            <Link 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page="Home">      
                            </Link>
                            <Link page="Benefits"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                            ></Link>
                            <Link page="Classes"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                            ></Link>
                            <Link page="Contact us"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                            ></Link>
                        </div>
 </div>
)}
    </nav>
  )
}

export default Navbar