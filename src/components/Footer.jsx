import React from 'react'
import Logo from '../assets/logo.png'
import { FaInstagram, FaWhatsapp, FaTelegram ,FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return <motion.footer initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{ duration: 2, delay: 2.8 }} className='w-[55%] rounded-xl h-[15vh] bg-orange-500/5 absolute mt-[-8%] ml-[22%] grid grid-cols-4 overflow-y-hidden' id='footer'>

    <div className='col-span-1 font-navbar-1 text-gray-300 flex flex-col items-center py-2'>
        <h1>شبکه های اجتماعی</h1>
        <div className='content-[""] w-52 h-[2px] bg-gray-300 my-1'></div>
        <div className='flex items-center justify-center text-2xl gap-6 py-3'>
            <FaInstagram className='text-pink-600 scale-105 cursor-pointer hover:text-orange-500 hover:scale-125 duration-300 hover:rotate-12 fooer-shadow-icon hover:fooer-shadow-icon2'/>
            <FaWhatsapp className='text-green-500 scale-105 cursor-pointer hover:text-orange-500 hover:scale-125 duration-300 hover:rotate-12 fooer-shadow-icon hover:fooer-shadow-icon2'/>
            <FaTelegram className='text-blue-500 cursor-pointer hover:text-orange-500 hover:scale-125 duration-300 hover:rotate-12 fooer-shadow-icon hover:fooer-shadow-icon2'/>
            <FaYoutube className='text-3xl text-red-600 cursor-pointer hover:text-orange-500 hover:scale-125 duration-300 hover:rotate-12 fooer-shadow-icon hover:fooer-shadow-icon2'/>
        </div>
    </div>

    <div className='col-span-1 font-navbar-1 text-gray-300 flex flex-col items-center py-2'>
        <h1>آدرس کارخانه</h1>
        <div className='content-[""] w-52 h-[2px] bg-gray-300 my-1'></div>
        <p className='px-6 leading-7 text-sm text-right '>استان تهران - بعد كيلومتر 15 بزرگرراه شهيد لشگري (جاده مخصوص كرج) - شركت خودرو سازی سايپا</p>
    </div>

    <div className='col-span-1 font-navbar-1 text-gray-300 flex flex-col items-center py-2'>
        <h1>ارتباط و پشتیبانی</h1>
        <div className='content-[""] w-36 h-[2px] bg-gray-300 my-1'></div>
        <p className='py-2 tracking-wider'>021-0006-0006</p>
        <p className='tracking-wider'>0930-0000-656</p>
        <p className='py-2'>Saipa@gmail.com</p>
    </div>
    
    <div className='col-span-1 flex items-center justify-center'>
        <img src={Logo} alt="" className='w-24 mr-16'/>
        <h1 className='font-home text-3xl tracking-wide text-gray-400 absolute ml-[50px]'>Saipa</h1>
    </div>

  </motion.footer>
}

export default Footer