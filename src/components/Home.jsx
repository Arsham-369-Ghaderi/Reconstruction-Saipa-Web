import React, { useState } from 'react'
import Video from '../assets/bg.mp4'
import Quick from '../assets/quick.png'
import { AnimatePresence, easeIn, easeInOut, motion} from 'framer-motion'
import Shahin from '../assets/shahin.png'
import Arya from '../assets/arya.png'
import Nissan from '../assets/nissan.png'

const RightSuport = (delay) => {
  return {
      hidden: {
          opacity: 0,
          x: 100,
      },
      show: {
          opacity: 1,
          x: 0,
          transition: {
              duration: 1,
              delay: delay,
              ease: easeInOut,
          },
      },
      exit: {
          opacity: 0,
          x: -50,
          transition: {
              duration: 1,
              ease: easeInOut,
          }
      }
  };
}

const PhotoSuport = (delay) => {
  return {
      hidden: {
          opacity: 0,
          scale: 0.1,
      },
      show: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 1,
              delay: delay,
          },
      },
      exit: {
          opacity: 0,
          scale: 0.1,
          transition: {
              duration: 1,
          }
      }
  };
}

const HomeData = [
  {
    id: 1,
    image: Quick,
    title: "کوییک",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 450.000.000",
  },
  {
    id: 2,
    image: Shahin,
    title: "شاهین",
    subTitle: "لورم ایپسوم متن ساختگی بام تولید سادگی نامفهومم  از صنعت چاپ برای و باک استفاده از طراحان گرافیک است",
    price: "تومان 620.000.000",
  },
  {
    id: 3,
    image: Arya,
    title: "آریا",
    subTitle: "لورم ایپسوم متن ساختگی بام تولید سادگی نامفهومم  از صنعت چاپ برای و باک استفاده از طراحان گرافیک است",
    price: "تومان 850.000.000",
  },
  {
    id: 4,
    image: Nissan,
    title: "نیسان",
    subTitle: "لورم ایپسوم متن ساختگی بام تولید سادگی نامفهومم  از صنعت چاپ برای و باک استفاده از طراحان گرافیک است",
    price: "تومان 710.000.000",
  },
];

const Home = () => {

  const [Data, setData] = useState(HomeData[0]);

  const handelActiveData = (data) => {
    setData(data)
  }

  return <>
    <section className='w-full h-screen bg-black flex items-center justify-center' id='home'>

       <motion.video loop initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1, ease: easeIn }} src={Video} autoPlay muted className='max-w-[70%] h-[100vh]'></motion.video>

       <AnimatePresence mode='wait'>
        <motion.img key={Data.id} variants={PhotoSuport(0.5)} animate="show" exit="exit" initial={{ opacity: 0, y: 10, scale: 0.1}} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5}} src={Data.image} alt="" className='absolute w-[25%] mix-blend-plus-darker z-10 home-shadow home-shadow-2'/>
       </AnimatePresence>
       
       <div className='text-gray-400 flex flex-col space-y-1 absolute bg w-[370px] h-[20vh] ml-[60%] text-right'>

        <AnimatePresence mode='wait'>
          <motion.h1 key={Data.id} variants={RightSuport(0.7)} initial="hidden" animate="show" exit="exit" className='font-header-home text-4xl'>{Data.title}</motion.h1>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={Data.id} variants={RightSuport(0.9)} initial="hidden" animate="show" exit="exit" className='leading-8  font-navbar-1 pt-2'>{Data.subTitle}</motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={Data.id} variants={RightSuport(1.1)} initial="hidden" animate="show" exit="exit" className='font-navbar-1 '>{Data.price}</motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.button key={Data.id} variants={RightSuport(1.3)} initial="hidden" animate="show" exit="exit" className='bg-orange-400 text-white font-navbar-1 w-20 py-[6px] text-sm rounded-xl ml-5 hover:bg-green-500 duration-500 hover:scale-105 car-btn-shadow hover:car-btn-shadow2'>خرید</motion.button>
        </AnimatePresence>
        
       </div>



       <div className='w-[600px] h-[20vh] absolute left-8 mt-[40%] flex items-center justify-center gap-16 px-2'>
        {
          HomeData.map((data) => {
            return (
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1, ease: easeIn }} key={data.id} className='flex flex-col items-center justify-center space-y-2'>
                <div onClick={() => handelActiveData(data)} className='bg-gray-600/20 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-200 duration-500 hover:scale-110'>
                  <img src={data.image} alt="" className={`w-[70px]`}/>
                </div>
                <div>
                  <p className='font-navbar-1 text-gray-400'>{data.title}</p>
                </div>
              </motion.div>
            )
          })
        }
       </div>



  </section>
  </>
}

export default Home