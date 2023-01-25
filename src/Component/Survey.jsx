import React from 'react'
import SurveyCard from "./SurveyCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import surveydata from "../SurveyData/data.json";
import { useState } from 'react';


function Survey() {
  const tlength=surveydata.length;
  const [activeslide,setActiveSlide]=useState(1);
  let lastPage=false;



  if (activeslide===tlength){
    lastPage=true;
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mt-5 p-5 border border-info rounded-4 m-auto">
                <div className='mt-0 p-0 mb-2'>{activeslide}\{tlength}</div>
                <h1 className='mb-4 text-center'>Survey application</h1>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
     
    
        onSlideChange={(ev) => setActiveSlide(ev.activeIndex+1)}
        onSwiper={(swiper) => console.log("")}
        >


          {
            surveydata.map(data=>
                <SwiperSlide>
                  <SurveyCard lpage={lastPage} sdata={data} key={data.id} />
                </SwiperSlide> 
            
            )
          }
    
    
      </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Survey