import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "./shared/type";
import Home from "./scenes/home/index";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";



function App() {

  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage,setIsTopOfPage]=useState<boolean>(true)

  useEffect (()=>{
    const handleScroll=()=>{
      if(window.scrollY=== 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    
      <div className="bg-amber-100 w-[100%] h-screen">

        <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}></Navbar>
         <Home setSelectedPage={setSelectedPage}></Home>
         <Benefits setSelectedPage={setSelectedPage}></Benefits>
         <OurClasses setSelectedPage={setSelectedPage}></OurClasses>
         <ContactUs setSelectedPage={setSelectedPage}></ContactUs>
      </div>
      
    
  )
}

export default App
