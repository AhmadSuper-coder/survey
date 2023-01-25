import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import { useSwiper } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

const data={
    userq:"",
    userans:"",
    unique_id:""
}

function Survey(props) {
    const swiper=useSwiper();
    const navigate = useNavigate();
    
    let toggle;
    const tickAnswer=(events)=>{
        let ans=events.target.innerHTML;
        let q=props.sdata.question;
        const uniqudata=uuidv4();
        localStorage.setItem(q,JSON.stringify({ans,uniqudata}));
        
        const color=true;
        toggle=color?'active':"";

    }
    
    
    const nextHandle=()=>{
     
        if (props.lpage){
            let completed=confirm("Are you sure! you want to submit? ");
            localStorage.setItem("flag","completed");
            if (completed){
            
                navigate("/end");
                setTimeout(()=>{
                    navigate("/");
                },5000)
            }else{
                navigate("/start");
            }
        }


    }


  return (
    <>
        <div className="main_slid text-center">
                <div className="question">
                <p>{props.sdata.qn}. {props.sdata.question} </p>
                </div>

            <div className="answer mb-3">
                <div className="opt">

                
                    {
                        props.sdata.rating.map(data=>
                            <button className={`btn ${toggle} btn-outline-primary rounded-circle btn-sm mx-1`} style={{width:"40px", height:"40px"}} onClick={tickAnswer}>{data}</button> 
                            )
                    }
                    
                </div>
            </div>


    
            <div className="btn mt-4">
            
                <button className='btn btn-success gy-4 mx-5 btn-sm' onClick={() => {swiper.slidePrev()}}>prevSlide</button>

                <button className='btn text-end btn-success mx-5 btn-sm' onClick={() => {swiper.slideNext();nextHandle()}}>nextSlide</button>

            </div>
        </div>
    </>
  )
}

export default Survey