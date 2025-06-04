import Lottie from 'lottie-react';
import React from 'react';
import sliderOne from '../../assets/lotties/slider-1.json'
import sliderTwo from '../../assets/lotties/slider-2.json'
import sliderThree from '../../assets/lotties/slider-3.json'
const Banner = () => {
    return (
        <div>
          <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" /> */}
      <div className='flex items-center justify-evenly gap-10 w-full h-full bg-gradient-to-t from-[#00A79D] to-white  '>
        <div className='flex flex-col gap-6'>
            <h1 className='text-4xl fontInter font-bold'>Lost Something? <br /> Let Us Help You Find It!</h1>
            <p className='fontInter'>Our Lost & Found system makes it easy to report missing items and check for items others have found. <br /> We're here to reunite you with your belongings.</p>
            <button className='btn w-fit'>Ask Our AI</button>
        </div>
        <Lottie animationData={sliderOne} loop={true} className='w-[700px]'></Lottie>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform gap-6 justify-center items-baseline-last h-full">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" /> */}
      <div className='flex items-center justify-center w-full h-full  bg-gradient-to-t from-[#00A79D] to-white '>
        <div className='flex flex-col gap-6'>
            <h1 className='text-4xl fontInter font-bold'>Your Lost Device <br /> Deserves a Second Chance.</h1>
            <p className='fontInter'>Every day, valuable electronics like phones, laptops, and gadgets are lost—and often <br /> found by kind strangers. Use our platform to report lost items or check our database to find yours.</p>
            <button className='btn w-fit'>Ask Our AI</button>
        </div>
        <Lottie animationData={sliderTwo} loop={true} className='w-[700px]'></Lottie>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform gap-6 justify-center items-baseline-last h-full">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" /> */}
      <div className='flex items-center justify-evenly gap-10 w-full h-full bg-gradient-to-t from-[#00A79D] to-white  '>
        <Lottie animationData={sliderThree} loop={true} className='w-[700px]'></Lottie>
        <div className='flex flex-col gap-6'>
            <h1 className='text-4xl fontInter font-bold'>Lost a Beloved Pet? <br /> Found Someone's Best Friend?</h1>
            <p className='fontInter'>We're here to reconnect hearts and heal families. Whether you’ve lost a pet or found someone’s furry friend, <br /> share the details and help bring comfort, hope, and joy back home.</p>
            <button className='btn w-fit'>Ask Our AI</button>
        </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform gap-6 justify-center items-baseline-last h-full">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Banner;