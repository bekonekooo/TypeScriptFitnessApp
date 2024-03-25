import Htext from "../../shared/Htext"
import { SelectedPage } from "../../shared/type"
import {motion } from "framer-motion"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import { ClassType } from "../../shared/type"
import Class from "./Class"




const classes:Array<ClassType>=[
    {
        name:"weight trainnig",
        image:image1,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
        name:"fitness trainnig",
        image:image2,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
        name:"adventure trainnig",
        image:image3,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
        name:"flexing trainnig",
        image:image4,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
        name:"yoga trainnig",
        image:image5,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    }, 
    {
        name:"bingo trainnig",
        image:image6,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
]

type Props = {setSelectedPage:(value:SelectedPage)=>void}


const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="classes"
    className="w-full bg-red-100">
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Classes)}>
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
                                whileInView="visible"
                                viewport={{once:true ,amount:0.5}}
                                transition={{duration:1}}
                                variants={{
                                    hidden:{opacity:0 , x:-100},
                                    visible:{opacity:1,x:0}
                                }}
            >
                <div className="md:w-3/5">
                    <Htext>MY CLASSES</Htext>
                    <p className="p-7">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[352px] w-full overflow-w-auto overflow-y-hidden custom-scrollbar">
                <ul className="w-[2800px] whitespace-nowrap scroll-content" >
                    {classes.map((item:ClassType,index)=>(
                            <Class key={`${item.name}-${index}`}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                            ></Class>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses