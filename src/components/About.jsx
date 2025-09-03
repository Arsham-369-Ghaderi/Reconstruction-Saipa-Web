import React from 'react'
import VideoAbout from '../assets/bg-about.mp4'
import { motion } from 'framer-motion'
import AboutImage from '../assets/about.png'

const About = () => {
  return <section className='w-full min-h-screen bg-black text-white'>
    <motion.video initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }} src={VideoAbout} autoPlay muted></motion.video>

    <div className='absolute w-[650px] mt-[-44.5%] ml-[9%]'>
      <motion.img initial={{ opacity: 0, x: -450, scale: 0.2}} whileInView={{ opacity: 1, x: 0, scale: 1}} viewport={{ once: true }} transition={{ duration: 2, delay: 1 }} src={AboutImage} alt="" className='w-full about-img-shadow'/>
    </div>

    <div className='w-[550px]  absolute mt-[-36.5%] ml-[53%] h-[48vh]'>
      <motion.h1 initial={{ opacity: 0, x: 450}} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 1.3 }} className='font-header-home text-5xl tracking-wider text-right'>همه چیز درباره سایپا</motion.h1>
      <motion.p initial={{ opacity: 0, x: 450}} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 2.2 }} className='mt-7  px-1 text-right h-[38vh] leading-[360%] text-xl'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</motion.p>
    </div>
  </section>
}

export default About