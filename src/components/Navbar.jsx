import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { BiMenu } from "react-icons/bi";
import { motion } from 'framer-motion';

const listMenuIcon = [
    {
        id: 1,
        title: "درباره ما",
        link: "#footer",
    },
    {
        id: 2,
        title: "قرعه کشی",
        link: "#lottry",
    },
    {
        id: 3,
        title: "خودرو",
        link: "#car",
    },
    {
        id: 4,
        title: "خانه",
        link: "#home",
    },
];

const Navbar = () => {

  const [menuicon, setMenuIcon] = useState(false);

  return <nav className='w-full fixed h-[8vh] bg-orange-950/25 grid grid-cols-7 items-center justify-between z-20'>

    <div className='col-span-1  h-full flex items-center justify-center pr-32'>
        <img src={Logo} alt="" className='w-[100px]'/>
    </div>

    <ul className='col-span-5  hidden md:flex h-full items-center justify-center gap-32 text-lg pl-[750px]'>
        {
            listMenuIcon.map((menu) => (
                <li key={menu.id}><a href={menu.link} className='text-white font-navbar-1 cursor-pointer z-30 navbar-shadow-ul hover:opacity-60 duration-300 hover:navbar-shadow-ul2 '>{menu.title}</a></li>
            ))
        }
    </ul>

    <div className='col-span-1  h-full flex justify-center items-center pl-20'>
        <button className='bg-orange-500 text-white font-navbar-1 py-2 px-4 text-sm rounded-xl hover:scale-105 duration-300 hover:opacity-90'>ورود / ثبت نام</button>
    </div>




    <button className='md:hidden' onClick={() => setMenuIcon(!menuicon)}>
           <BiMenu className='text-4xl text-color3 text-white'/>
    </button>

    {
        menuicon && (
            <ul className='md:hidden absolute top-28 left-28 w-[70%] right-0 z-10 space-y-2 bg-color2 text-color1 font-semibold flex flex-col items-center justify-center text-center h-[23vh] py-10 rounded-xl'>

                <li className='group px-10 py-4 border-b w-full flex items-center justify-center cursor-pointer hover:bg-color1 hover:text-color4 duration-300 hover:scale-90 rounded-full'>
                    <a href="#home" onClick={() => setMenuIcon(false)}>
                        <span className='text-xl'>خانه</span>
                    </a>
                </li>

                <li className='group px-10 py-4 border-b w-full flex items-center justify-center cursor-pointer hover:bg-color1 hover:text-color4 duration-300 hover:scale-90 rounded-full'>
                    <a href="#category" onClick={() => setMenuIcon(false)}>
                        <span className='text-xl'>دسته بندی</span>
                    </a>
                </li>

              <li className='group px-10 py-4 border-b w-full flex items-center justify-center cursor-pointer hover:bg-color1 hover:text-color4 duration-300 hover:scale-90 rounded-full'>
                    <a href="#shop" onClick={() => setMenuIcon(false)}>
                        <span className='text-xl'>محصولات</span>
                    </a>
              </li>

            </ul>
        )
    }
  </nav>
}

export default Navbar