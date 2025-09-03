import Saina from '../assets/saina.png'
import Tiba from '../assets/tiba.png'
import Praide from '../assets/praide.png'
import Sahand from '../assets/sahand.png'
import Atlas from '../assets/atlas.png'
import Padra from '../assets/padra.png'
import Quick from '../assets/quick.png'
import Shahin from '../assets/shahin.png'
import Arya from '../assets/arya.png'
import Nissan from '../assets/nissan.png'
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useState } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion'

const Right = (delay) => {
  return {
      hidden: {
          opacity: 0,
          x: 100,
      },
      show: {
          opacity: 1,
          x: 0,
          transition: {
              duration: 0.5,
              delay: delay,
              ease: easeInOut,
          },
      },
      exit: {
          opacity: 0,
          x: -50,
          transition: {
              duration: 0.1,
              ease: easeInOut,
          }
      }
  };
}

const Photo = (delay) => {
  return {
      hidden: {
          opacity: 0,
          scale: 0.1,
      },
      show: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 0.2,
              delay: delay,
          },
      },
      exit: {
          opacity: 0,
          scale: 0.1,
          transition: {
              duration: 0.1,
          }
      }
  };
}

const ImageData = [
  {
    id: 1,
    url: Saina,
    title: "ساینا",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 465.000.000",
    btn: 'خرید',
    fix: 'ml-[-53px] mt-[7.2%]',
  },
  {
    id: 2,
    url: Tiba,
    title: "تیبا",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 320.000.000",
    btn: 'خرید',
    fix: 'ml-[-40px] mt-[7.2%]',
    imagefix: 'w-[34%] h-[52vh] mr-12 mt-10',
  },
  {
    id: 3,
    url: Praide,
    title: "پراید",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 288.000.000",
    btn: 'خرید',
    fix: 'ml-[-2.4%] mt-[7.2%]',
  },
  {
    id: 4,
    url: Sahand,
    title: "سهند",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 850.000.000",
    btn: 'خرید',
    fix: 'ml-[-60px] mt-[7.6%]',
    imagefix: 'w-[38%] h-[40vh] mr-[-3%] mt-10',
  },
  {
    id: 5,
    url: Atlas,
    title: "اطلس",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 550.000.000",
    btn: 'خرید',
    fix: 'ml-[-70px] mt-[7.2%]',
    imagefix: 'w-[45%] h-[40vh] mr-[0%] mt-5',
  },
  {
    id: 6,
    url: Padra,
    title: "پادرا",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 790.000.000",
    btn: 'خرید',
    fix: 'ml-[-40px] mt-[7.2%]',
  },
  {
    id: 7,
    url: Quick,
    title: "کوییک",
    subTitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از به صنعت چاپ استفاده طراحان گرافیک است چاپگرها است",
    price: "تومان 450.000.000",
    btn: 'خرید',
  },
  {
    id: 8,
    url: Shahin,
    title: "شاهین",
    subTitle: "لورم ایپسوم متن ساختگی بام تولید سادگی نامفهومم  از صنعت چاپ برای و باک استفاده از طراحان گرافیک است",
    price: "تومان 620.000.000",
    btn: 'خرید',
    fix: 'ml-[-70px] mt-[7.2%]',
  },
  {
    id: 9,
    url: Arya,
    title: "آریا",
    subTitle: "لورم ایپسوم متن ساختگی بام تولید سادگی نامفهومم  از صنعت چاپ برای و باک استفاده از طراحان گرافیک است",
    price: "تومان 850.000.000",
    btn: 'خرید',
    fix: 'ml-[-1.5%] mt-[7.2%]',
  },
  {
    id: 10,
    url: Nissan,
    title: "نیسان",
    subTitle: "لورم ایپسوم متن ساختگی بام تولید سادگی نامفهومم  از صنعت چاپ برای و باک استفاده از طراحان گرافیک است",
    price: "تومان 710.000.000",
    btn: 'خرید',
    fix: 'ml-[-65px]',
  },
];

const Car = () => {

  const [indexa, setIndexa] = useState(0);

  const prev = () => {
    const first = indexa === 0;
    const newSlide = first ? ImageData.length - 1 : indexa - 1;
    setIndexa(newSlide)
  };

  const next = () => {
    const last = indexa === ImageData.length - 1;
    const newSlide2 = last ? 0 : indexa + 1;
    setIndexa(newSlide2)
  };

  return <section className='w-full bg-black min-h-screen flex items-center justify-center' id='car'>

  <div className='text-orange-400 absolute text-6xl cursor-pointer right-5 hover:text-green-400 duration-200'>
    <FaRegArrowAltCircleRight onClick={next}/>
  </div>

  <div className='text-orange-400 absolute text-6xl cursor-pointer left-5 hover:text-green-400 duration-200'>
    <FaRegArrowAltCircleLeft onClick={prev}/>
  </div>

  <AnimatePresence mode='wait'>
     <motion.div key={ImageData[indexa].id} variants={Photo(0.5)} initial="hidden" animate="show" exit="exit" style={{ backgroundImage: `url(${ImageData[indexa].url})` }} className={`absolute w-[30%] h-[35vh] mb-[5%] rounded-2xl bg-center bg-cover duration-500 ${ImageData[indexa].imagefix}`}></motion.div>
  </AnimatePresence>

  <div>
    <AnimatePresence mode='wait'>
      <motion.h1 key={ImageData[indexa].id} variants={Right(0.7)} initial="hidden" animate="show" exit="exit" className={`text-5xl absolute mt-[7%] ml-[-4.5%] font-header-home text-gray-400 ${ImageData[indexa].fix}`}>{ImageData[indexa].title}</motion.h1>
    </AnimatePresence>
  </div>

  <div>
    <AnimatePresence mode='wait'>
      <motion.p key={ImageData[indexa].id} variants={Right(0.9)} initial="hidden" animate="show" exit="exit" className='text-lg absolute mt-[11%] ml-[-13%] font-navbar-1 text-gray-400  w-[25%] text-center'>{ImageData[indexa].subTitle}</motion.p>
    </AnimatePresence>
  </div>

  <div>
    <AnimatePresence mode='wait'>
    <motion.p key={ImageData[indexa].id} variants={Right(1.1)} initial="hidden" animate="show" exit="exit" className='text-lg absolute mt-[14.6%] ml-[-13%] font-navbar-1 text-gray-700  w-[25%] text-center'>{ImageData[indexa].price}</motion.p>
    </AnimatePresence>
  </div>

  <div>
    <AnimatePresence mode='wait'>
      <motion.button key={ImageData[indexa].id} variants={Right(0.5)} initial="hidden" animate="show" exit="exit" className='bg-orange-400 text-white font-navbar-1 w-40 py-[7px] absolute mt-[17%] ml-[-4.5%] text-sm rounded-xl hover:scale-105 duration-500 car-btn-shadow hover:bg-green-500 hover:car-btn-shadow2'>{ImageData[indexa].btn}</motion.button>
    </AnimatePresence>
  </div>

  </section>
}

export default Car