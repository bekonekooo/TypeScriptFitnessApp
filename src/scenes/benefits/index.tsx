import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/16/solid"
import { BenefitType, SelectedPage } from "../../shared/type"
import { motion } from "framer-motion"
import Htext from "../../shared/Htext"
import Benefit from "./Benefit"
import ActionButton from "../../shared/ActionButton"
import BenefitspageGraphic from "../../assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

const benefits:Array<BenefitType>= [
    {
    icon:<HomeModernIcon className="h-6 w-6"></HomeModernIcon>,
    title:"state of golden dick",
    description:"u will find more than u were searching for"
                },
                  {
                    icon:<UserGroupIcon className="h-6 w-6"></UserGroupIcon>,
                    title:"100's of diverce classes",
                    description:"He will not discremenate any etnicty"
                                },  {
                                    icon:<AcademicCapIcon className="h-6 w-6"></AcademicCapIcon>,
                                    title:"sEXPERT AND PRO TRAıNER",
                                    description:"Justy try us"
                                                },
                                
                

]


const Benefits = ({setSelectedPage}: Props) => {
  return (
    //id is given for anchor link to smooth scroll
    <section id="benefits"className="  min-h-full py-20 md:ml-24 md:mr-24 ">

<motion.div
//where we are on nabigation
onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>

    {/* header */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true ,amount:0.5}}
    transition={{ duration:1}}
    variants={{
        hidden:{opacity:0 , x:-100},
        visible:{opacity:1,x:0}
    }}
     className="md:my-5 md:w-3/5 mx-5" >
       <Htext >MORE THAN JUST A GYM</Htext>
       <p className="my-5 text-sm text-[#57110c]">
        We provide world class fitness equipment,trainers and classes to get you to your ultimate fitness goals with ease.
        We provide true care into each and every member.
       </p>
    </motion.div>
    {/* benefits */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5} }
    variants={container}
    className=" items-center justify-between gap-8 mt-5 md:flex">
        {benefits.map((benefit:BenefitType)=>(
           <Benefit
           key={benefit.title}
           icon={benefit.icon}
           description={benefit.description}
           title={benefit.title}
           setSelectedPage={setSelectedPage}
           />
        ))}
    </motion.div>
                    {/* graphics and description */}
              <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                  {/* graphic */}
                  <img  className="mx-auto"
                  alt="benefits-page-graphic"
                  src={BenefitspageGraphic}
                  />
                  {/* description */}
                  <div>
                      {/* title */}
                      <div className="relative">
                          <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once:true ,amount:0.5}}
                          transition={{ duration:1}}
                          variants={{
                              hidden:{opacity:0 , x:100},
                              visible:{opacity:1,x:0}
                          }}
                          className="before:absolute before:-top-20 before:-left-20
                                            before:z-[1] before:content-abstractwaves  ">
                              <div>
                                  <Htext>
                                      MILLIONS OF HAPPY MEMBER GETTING{" "}
                                      <span className="text-red-500">FIT</span>
                                  </Htext>
                              </div>
                          </motion.div>
                      </div>
                      {/* DESCRIPT */}
                      <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once:true ,amount:0.5}}
                      transition={{ delay:0.5,duration:1}}
                      variants={{
                          hidden:{opacity:0 , x:-100},
                          visible:{opacity:1,x:0}
                      }}
                      className="px-5">
                        <p className="text-[#57110c] my-5">write here what you want tho write budddy 
                        Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.
                        </p>
                        <p className="text-[#57110c] mb-5"> and here      Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.
                        </p>
                      </motion.div>
                      {/* button */}
                      <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40
                                         before:z-[-1] before:content-sparkles   ">
                                            <ActionButton setSelectedPage={setSelectedPage}>
                                                Join now
                                            </ActionButton>
                                         </div>
                      </div>
                  </div>
              </div>
          </motion.div>
    </section>
  )
}
export default Benefits