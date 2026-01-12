import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    whileInView={{opacity:1, y:0}}
    transition ={{duration:1}}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
    
    <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
        <img src={assets.sample_img_1} alt="" 
        className='w-80 xl:w-96 rounded-lg'/>
    
    <div>

        <h2 className='text-3xl '>Introducing the AI-Powered Text to Image Generator</h2>
        <p className='text-gray-600 mb-4'>
            Easily bring your ideas to life with our AI-powered text-to-image generator. Simply enter a description, and watch as our advanced algorithms create stunning visuals that match your imagination. Perfect for artists, designers, and anyone looking to visualize concepts quickly and effortlessly.
        </p>
        <p className='text-gray-600'>
            Simply bring in a text prompt, and our cutting-edge AI will generate a unique image that brings your vision to life. Whether you are an artist seeking inspiration, a marketer needing eye-catching visuals, or just someone looking to have fun, our tool makes it easy and enjoyable to create stunning images from text.
        </p>
    </div>
    
    </div>
    </motion.div>


  )
}

export default Description
