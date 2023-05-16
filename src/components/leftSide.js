import React from "react";
import "./body.css";
import { BiRupee, BiTimer } from "react-icons/bi";
import {GrSchedulePlay, GrRadialSelected} from "react-icons/gr";
import {MdOutlineWatchLater, MdOutlineLiveTv} from "react-icons/md";
import {FaGraduationCap} from "react-icons/fa";
import {RiAdvertisementFill} from "react-icons/ri";
import {TbSquareRoundedNumber1Filled} from "react-icons/tb";
import {AiFillCheckCircle} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";

const LeftSide = () => {
  return (
    <div className="side">
       <div className="leftSide">
        <div className="heading-left">
          <h1>Access curated courses worth <br/>
          <BiRupee size={35}/>18,500 at just 
          <BiRupee size={35} color="blue"/><span className="blue">99</span> per year!</h1>
       
          <h6><span className="icons"><GrSchedulePlay size={40} color="white"/></span><span className="blue">100+</span> Job relevent courses</h6>  
          <h6><span className="icons"><MdOutlineWatchLater size={40}/></span> <span className="blue">20,000+</span> Hours of content</h6>
          <h6><span className="icons"><MdOutlineLiveTv size={40}/></span><span className="blue">Exclusive</span>webinar access</h6>
          <h6><span className="icons-alin"> <FaGraduationCap size={40}/></span> <span className="scholar">Scholarship worth </span><BiRupee size={25} color="blue"/><span className="blue">94,500</span></h6>
          <h6><span className="icons"><RiAdvertisementFill size={40}/></span><span className="blue">Ad Free</span> learning experience</h6>
        </div>
        </div>


        <div className="right-side">
         <div className="top">
          <TbSquareRoundedNumber1Filled size={40} color="blue"/><br/>
          <span className="down">sign Up</span>
          <TbSquareRoundedNumber1Filled size={40} color="blue"/><br/>
          <span className="down">Subscribe</span>
         </div>
         <h2>Select your subscription plan</h2>

         <div className="boxes">
           <GrRadialSelected size={20} color="grey" className="circle"/><span className="sub">12 Months Subscription</span><span className="total">Total <BiRupee size={25}/>99</span><span className="month"><br/><BiRupee size={15}/>8 /mo</span>
         </div>
         <div className="boxes">
           <AiFillCheckCircle size={20}  color="green" className="circle"/><span className="sub">12 Months Subscription</span><span className="total">Total <BiRupee size={25}/>179</span><span className="month"><br/><BiRupee size={15}/>15 /mo</span>
         </div>
         <div className="boxes">
           <BsCircle size={20} className="circle"/><span className="sub">6 Months Subscription</span><span className="total">Total <BiRupee size={25}/>149</span><span className="month"><br/><BiRupee size={15}/>25 /mo</span>
         </div>
         <div className="boxes">
           <BsCircle size={20} className="circle"/><span className="sub">3 Months Subscription</span><span className="total">Total <BiRupee size={25}/>99</span><span className="month"><br/><BiRupee size={15}/>33 /mo</span>
         </div>
         <div className="fee">
          <p><span className="sub">Subscription Fee</span>
          <span className="total"><BiRupee size={25}/>18,500</span></p>
         </div>
         <div className="offer">
         <div className="time"><h1>Limited time offer</h1>
         <p><BiTimer size={30} color="red"/>Offer valid till 25th March 2023</p></div>
         <span className="total">- <BiRupee size={25}/>18,401</span>
         </div>
         <div className="gst">
           <span className="sub"><h1 className="tut">Total</h1><span>(Incl. of 18% GST)</span></span>
           <span className="total"><BiRupee size={25}/>149</span>
         </div>
         <div className="submit">
         <button className="cancel">CANCEL</button>
         <button className="pay">PROCEED TO PAY</button>
         </div>
         <span></span>
        </div>
  
       </div>
  )
}
export default LeftSide;
  