import React from 'react'
import {motion} from 'framer-motion'
import { fadeInOut } from '../animations'
import {BsExclamationTriangleFill, FaCheck  } from "../assesets/icnons/index";
const Alert = ({message,type}) => {

   if(type==="success")
   {
    return (
        <motion.div {... fadeInOut} className='fixed shadow-slate-300 z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-emerald-300 items-center gap-4'>
            <FaCheck className='text-xl text-emerald-700'/>
            <p className='text-xl text-emerald-700'>{message}</p>
        </motion.div>
    )
   }
   if(type==="danger")
   {
    return (
        <motion.div {... fadeInOut} className='fixed shadow-slate-300 z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-red-300 items-center gap-4'>
            <BsExclamationTriangleFill className='text-xl text-red-700'/>
            <p className='text-xl text-red-700'>{message}</p>
        </motion.div>
    )
   }
   if(type==="warning")
   {
    return (
        <motion.div {... fadeInOut} className='fixed shadow-slate-300 z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-yellow-300 items-center gap-4'>
            <BsExclamationTriangleFill className='text-xl text-yellow-700'/>
            <p className='text-xl text-yellow-700'>{message}</p>
        </motion.div>
    )
   }
   if(type==="info")
   {
    return (
        <motion.div {... fadeInOut} className='fixed  shadow-slate-300 z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-blue-300 items-center gap-4'>
            <FaCheck className='text-xl text-blue-700'/>
            <p className='text-xl text-blue-700'>{message}</p>
        </motion.div>
    )
   }
  
}

export default Alert
