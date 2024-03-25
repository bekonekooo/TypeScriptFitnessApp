import {useForm} from "react-hook-form"
import { SelectedPage } from "../../shared/type"
import {motion } from "framer-motion"
import Htext from "../../shared/Htext"

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../shared/Yup";



type Props = {setSelectedPage:(value:SelectedPage)=>void}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles=`w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white  my-2`

    const {
        register,
        trigger,
        formState:{errors}
    }=useForm({
        resolver:yupResolver(schema),
    });

    const onSubmit = async (e:any) => {
        const isValid= await trigger();
        if(!isValid){
            e.preventDefault()
        }
    }

  return (
    <section
    id="contactus"
    className="mx-auto w-5/6 pt-24">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
{/* header */}
            <motion.div className="md:w-3/5"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{once:true ,amount:0.5}}
                   transition={{duration:1}}
                   variants={{
                       hidden:{opacity:0 , x:-100},
                       visible:{opacity:1,x:0}
                   }}
            >
            <Htext>
                <span className="text-red-500">JOIN NOW</span> TO
            </Htext>
                    <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </motion.div>
                    {/* form and image */}
                    <div className="mt-10 justify-between gap-8 md:flex">
                        <motion.div className="mt-10 basis-3/5 md:mt-0"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{once:true ,amount:0.5}}
                         transition={{duration:1}}
                         variants={{
                             hidden:{opacity:0 , y:100},
                             visible:{opacity:1,y:0}
                         }}
                        >
                        {/*
                        in this part i used only usefrom react/hook second part we I integrated yup ass well
                        <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/7f3cbf1997b36d5e152d0bae5f663cbd"
                        method="POST">
                            <input      className={inputStyles}  
                            type="text"
                            placeholder="Name"
                            {...register("name",{  
                                required:true,
                                maxLength:40,                            
                            } )}                      
                            />
                            {errors.name &&(
                                <p className="mt-1 text-primary-500 ">
                                    {errors.name.type ==="required" && "this field is required"}
                                    {errors.name.type ==="maxLenght" && "max lenght is 40"}
                                </p>
                            )}
                            <input      className={inputStyles}
                            type="text"
                            placeholder="Email"
                            {...register("email",{  
                                required:true,
                           
                                // foremailchacek
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i                          
                            } )}                      
                            />
                            {errors.email &&(
                                <p className="mt-1 text-primary-500 ">
                                    {errors.email.type ==="required" && "this field is required"}
                                    {errors.email.type ==="pattern" && "invalid email adress"}

                                </p>
                            )}

                        <textarea
                         className={inputStyles}                         
                            rows={4}
                            cols={50}
                            placeholder="Message"
                            {...register("message",{  
                                required:true,
                                maxLength:400,                            
                            } )}                      
                            />
                            {errors.message &&(
                                <p className="mt-1 text-primary-500 ">
                                    {errors.message.type ==="required" && "this field is required"}
                                    {errors.message.type ==="maxLenght" && "max lenght is 400"}
                                </p>
                            )}
                            <button
                            type="submit"
                            className="mt-5 rounded-lg bg-yellow-500 px-20 py-3 transition duration-500 :hover:text-white ">
                                      SUBMIT
                            </button>
                          
                        </form> */}
                         <form
            target="_blank"
            onSubmit={onSubmit} // Use handleSubmit instead of custom onSubmit
            action="https://formsubmit.co/7f3cbf1997b36d5e152d0bae5f663cbd"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="Name"
              {...register('name')} // Use register without options
            />
            {errors.name && <p className="mt-1 text-primary-500">{errors.name.message}</p>}
            <input
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register('email')} // Use register without options
            />
            {errors.email && <p className="mt-1 text-primary-500">{errors.email.message}</p>}
            <textarea
              className={inputStyles}
              rows={4}
              cols={50}
              placeholder="Message"
              {...register('message')} // Use register without options
            />
            {errors.message && <p className="mt-1 text-primary-500">{errors.message.message}</p>}
            <button
              type="submit"
              className="mt-5 rounded-lg bg-yellow-500 px-20 py-3 transition duration-500 :hover:text-white"
            >
              SUBMIT
            </button>
          </form>

                        </motion.div>
                    </div>
        </motion.div>
    </section>
  )
}

export default ContactUs