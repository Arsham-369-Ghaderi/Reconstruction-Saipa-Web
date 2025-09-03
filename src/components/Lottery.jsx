import React, { useState } from 'react'
import VideoLottry from '../assets/bg-lottry.mp4'
import LottryImage from '../assets/lottry.png'
import { motion } from 'framer-motion'

const Lottery = () => {

  return <section className='w-full h-screen bg-black overflow-hidden' id='lottry'>
    <div>
    <motion.video src={VideoLottry} autoPlay muted initial={{ opacity: 0, scale: 0.1}} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1 }} className='w-full'></motion.video>
    <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{ once: true }} transition={{ duration: 3, delay: 2 }} className='w-full h-screen bg-black/95 absolute mt-[-56.3%]'></motion.div>
    </div>

    <div className='absolute mt-[-28%] right-48'>
      <motion.h1 initial={{ opacity: 0, x: 180}} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 3.2 }} className='text-orange-500 font-header-home text-5xl tracking-wider shadow-lottry-h1 text-right mt-[-30%]'>قرعه کشی خودرو کارخونه</motion.h1>
      <motion.p initial={{ opacity: 0, x: 180}} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 3.8 }} className='text-right text-gray-300 w-[600px] px-[42px] leading-10 font-navbar-1 shadow-lottry-p ml-[5%] mt-[6%] text-xl'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیمم تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای من کاربردی می باشد</motion.p>
    </div>

    <div className='absolute mt-[-47%] left-48 w-[40%]'>
      <motion.img src={LottryImage} initial={{ opacity: 0, x: -180}} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 4 }} alt="" className='w-full'/>
    </div>

    <div className='absolute mt-[-21%] right-[10.9%]'>
      <motion.button initial={{ opacity: 0, x: 180}} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 4 }} className='font-navbar-1 text-white bg-orange-500 rounded-xl px-48 py-[8px] text-lg car-btn-shadow hover:car-btn-shadow2 hover:scale-105 duration-300 hover:opacity-70 hover:bg-orange-400'>شرکت در قرعه کشی</motion.button>
    </div>
  </section>
}

export default Lottery