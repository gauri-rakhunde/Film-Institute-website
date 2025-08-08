import React from 'react';
import img1 from '../images/About/why choose us.jpg';
import img2 from '../images/About/our mission.jpg';
import img3 from '../images/About/our vision.jpg';
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
import Directors from '../component/Directors'
import Advisory from '../component/Advisory'
import Redline from '../images/Redline.png'
export default function Aboutus() {
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign:'center', marginTop:'100px', marginBottom:'50px',fontFamily:'Times of Roman'}}>A few words <span style={{color:'red'}}>
        About us</span></h1>
      <span className="rl">
          <center>
        <img src={Redline} alt={"Redline"} />
        </center>
        </span>
      <p className='p1'>Starlight Film Academy Is One Of The Best Film Schools In India And Among The Top Ranking Film Schools In The World. 
      Starlight Film Academy Has Successfully Completed 21 Years Providing Total Film Study Course To All National & International Students From 
      Countries Like UK, USA, Canada, Australia, Russia, France, Germany, Saudi Arabia, South Africa, Spain, Japan & Neighbouring Countries Since 
      2001. Our Academy Is Open To All Aspirants Who Have The Requisite Qualifications And Eligibility To Apply For Professional Training. We 
      Conduct Regular Full Time/Part Time, Weekend & Short Term With Certificate & Diploma Courses.</p>

 <div class="container">
   <div class="item">
     <img src={img1} alt={"Image1"}/>
     <p><b>Why Choose Us</b><br/>
 Mumbai Film Academy Has Tie Ups With More Than 1600 Production Houses In India & Abroad Who Have Provided Placement To More Than 1200 Students 
 Of Mumbai Film Academy In The Last 21 Years .</p>
   </div>
   <div class="item">
     <img src={img2}  alt={"Image2"}/>
     <p><b>Our Mission</b><br/>
 To Train Aspirants Having An Imaginative Bent Of Mind In All Creative And Technological Aspects Of Film & Television Industry, with A Meaningful 
 Social Impact, Thereby Improving The Quality Of Media And Entertainment.</p>
   </div>
   <div class="item">
     <img src={img3}  alt={"Image3"}/>
     <p><b>Our Vission</b><br/>
 Our Vision Is To Create Film Makers, Film Directors, Actors, Cinematographers, Script Writers, Film & Video Editors, Audio Engineers, Music 
 Directors, Sound Recordists, Classical & Playback Singers For The Film Industry.</p>
   </div>
 </div>
 <hr/>
     <Directors/>
     <Advisory/>
      <Footer/>
    </div>
  );
}
