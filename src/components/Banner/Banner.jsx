import Lottie from 'lottie-react';
import React from 'react';
import sliderOne from '../../assets/lotties/slider-1.json'
import sliderTwo from '../../assets/lotties/slider-2.json'
import sliderThree from '../../assets/lotties/slider-3.json'
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Banner = () => {
    return (
  <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 2, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className='w-11/12 mx-auto p-7  bg-[#00A79D]  rounded-2xl mt-6'>
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        scrollbar={{ draggable: true }}
        loop
        className="w-full"
    >
      

  <SwiperSlide>
      <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:justify-evenly xl:gap-10 w-full h-full   '>
        <div className='flex flex-col gap-6 text-center lg:text-start'>
          <Fade direction="top" duration={500}>
            <h1 className='text-2xl sm:text-3xl 2xl:text-5xl text-white fontInter font-bold'>Lost Something? <br />
            <Typewriter
                        words={[`Let Us Help You Find It!`]}
                        loop={1} 
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={80}
                        delaySpeed={1500}
                        />
            </h1>      
                        </Fade>
          <Fade direction="top" duration={700}>
            <p className='fontInter text-sm sm:text-base text-gray-600'>Our Lost & Found system makes it easy to report missing items and check for items others have found. <br /> We're here to reunite you with your belongings.</p>
            </Fade>
          <Fade direction="top" duration={800}>
            <div className=''>
              <div className='block sm:hidden'></div>
              <button className='btn w-fit bg-base-300 drop-shadow-xl/40 text-[#00A79D] hover:bg-[#00A79D99] hover:text-white'>Read More</button>
            </div>
            </Fade>
        </div>
        <motion.div
        className='hidden sm:block'
                    initial={{ opacity: 0, y: 50 }}    
                    animate={{ opacity: 1, y: [0, 10, 0], x: [0, -30, 0] }}
                    transition={{
                        opacity: { duration: 1 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        x: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                        }}
        >
          <Lottie animationData={sliderOne} loop={true} className='w-[300px] sm:w-[400px] 2xl:w-[500px]'></Lottie>
          
        </motion.div>
      </div>
  </SwiperSlide>
  
  <SwiperSlide>
      <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:justify-evenly w-full h-full   '>
        <div className='flex flex-col gap-6 text-center lg:text-start'>
          <Fade direction="top" duration={700}>
            <h1 className='text-2xl sm:text-3xl 2xl:text-5xl text-white fontInter font-bold'>Your Lost Device <br /> 
                        <Typewriter
                        words={[`Deserves a Second Chance.`]}
                        loop={1} 
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={80}
                        delaySpeed={1500}
                        />
            </h1>
          </Fade>
            <Fade direction="top" duration={800}>
            <p className='fontInter text-sm sm:text-base text-gray-600'>Every day, valuable electronics like phones, laptops, and gadgets are lost—and often <br /> found by kind strangers. Use our platform to report lost items or check our database to find yours.</p>
            </Fade>
              <Fade direction="top" duration={800}>
            <div className=''>
              <div className='block sm:hidden'></div>
              <button className='btn w-fit bg-base-300 drop-shadow-xl/40 text-[#00A79D] hover:bg-[#00A79D99] hover:text-white'>Read More</button>
            </div>
            </Fade>
                
        </div>
        <motion.div
        className='hidden sm:block'
                    initial={{ opacity: 0, y: 50 }}    
                    animate={{ opacity: 1, y: [0, 40, 0], x: [0, 40, 0] }}
                    transition={{
                        opacity: { duration: 1 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        x: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                        }} 
        >
          <Lottie animationData={sliderTwo} loop={true} className='w-[300px] sm:w-[400px] 2xl:w-[500px]'></Lottie>
        </motion.div>  
      </div>
  </SwiperSlide>
  
  <SwiperSlide>
      <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:justify-evenly xl:gap-10 w-full h-full   '>

        <div className='flex flex-col gap-6 text-center lg:text-start'>
          <Fade direction="top" duration={700}>
            <h1 className='text-2xl sm:text-3xl 2xl:text-5xl text-white fontInter font-bold'>Lost a Beloved Pet? <br /> 
                        <Typewriter
                        words={[`Found Someone's Best Friend?`]}
                        loop={1} 
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={80}
                        delaySpeed={1500}
                        />
            </h1>
          </Fade>
            <Fade direction="top" duration={600}>
            <p className='fontInter text-sm sm:text-base text-gray-600'>We're here to reconnect hearts and heal families. Whether you’ve lost a pet or found someone’s furry friend, <br /> share the details and help bring comfort, hope, and joy back home.</p>
            </Fade>
              <Fade direction="top" duration={800}>
            <div className=''>
              <div className='block sm:hidden'></div>
              <button className='btn w-fit bg-base-300 drop-shadow-xl/40 text-[#00A79D] hover:bg-[#00A79D99] hover:text-white'>Read More</button>
            </div>
            </Fade>
                
              </div>
              <motion.div
                className='hidden sm:block'
                    initial={{ opacity: 0, y: 50 }}    
                    animate={{ opacity: 1, y: [0, 30, 0], x: [0, -50, 0] }}
                    transition={{
                        opacity: { duration: 1 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        x: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                        }} 
        >
          <Lottie animationData={sliderThree} loop={true} className='w-[300px] sm:w-[400px] 2xl:w-[500px]'></Lottie>        
        </motion.div>
      </div>
  </SwiperSlide>
  
    </Swiper>
  </motion.div>
    );
};

export default Banner;
