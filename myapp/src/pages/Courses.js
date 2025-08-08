import React from 'react'
import C1 from '../images/Courses/C1.jpg'
import C2 from '../images/Courses/C2.jpg'
import C3 from '../images/Courses/C3.jpg'
import C4 from '../images/Courses/C4.jpg'
import C5 from '../images/Courses/C5.jpg'
import C6 from '../images/Courses/C6.jpg'
import C7 from '../images/Courses/C7.jpg'
import C8 from '../images/Courses/C8.jpg'
import C9 from '../images/Courses/C9.jpg'
import C10 from '../images/Courses/C10.jpg'
import C11 from '../images/Courses/C11.jpg'
import C12 from '../images/Courses/C12.jpg'
import Redline from '../images/Redline.png'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'


export default function Courses() {
  return (
    <div>
        
       <Navbar/>
      
        <h1 style={{textAlign:'center', marginTop:'80px', marginBottom:'50px'}}>Popular <span style={{color:'red'}}>Courses</span></h1>
        <span className="rl">
          <center>
        <img src={Redline} alt={"Redline"} />
        </center>
        </span>


        <span className="bo-container">
          <div className="bo">
           <img src={C1} alt={"C1"} />
           <p> D.F Tech In Direction Course in Pune</p>
            </div>
            <hr/>
            <div className="bo">
            <img src={C2} alt={"C2"} />
           <p>D.F Tech In CinematoGraphy Course in Pune</p>
           </div>
           <div className="bo">
            <img src={C3} alt={"C3"} />
           <p>D.F Tech In PhotoGraphy Course in Pune</p>
           </div>
        </span>

        <span className="bo-container">
          <div className="bo">
           <img src={C4} alt={"C4"} />
           <p> Diploma In Acting Course in Pune</p>
            </div>
            <hr/>
            <div className="bo">
            <img src={C5} alt={"C5"} />
           <p>Diploma In Video Editing Course in Pune</p>
           </div>
           <div className="bo">
            <img src={C6} alt={"C6"} />
           <p>Diploma In Dubbing Course in Pune</p>
           </div>
        </span>

        <span className="bo-container">
          <div className="bo">
           <img src={C7} alt={"C7"} />
           <p> Diploma In Visual Effect Course in Pune</p>
            </div>
            <hr/>
            <div className="bo">
            <img src={C8} alt={"C8"} />
           <p>Diploma In Script Writing Course in Pune</p>
           </div>
           <div className="bo">
            <img src={C9} alt={"C9"} />
           <p>Diploma In News Reading Course in Pune</p>
           </div>
        </span>


        <h1 style={{textAlign:'center', marginTop:'80px', marginBottom:'50px'}}>Crash <span style={{color:'red'}}>Courses</span></h1>
        <span className="rl">
          <center>
        <img src={Redline} alt={"Redline"} />
        </center>
        </span>


        <span className="bo-container">
          <div className="bo">
           <img src={C10} alt={"C10"} />
           <p> Acting for kids Course in Pune</p>
            </div>
            <hr/>
            <div className="bo">
            <img src={C11} alt={"C11"} />
           <p>DI Color Grading Course in Pune</p>
           </div>
           <div className="bo">
            <img src={C12} alt={"C12"} />
           <p>Aerial CinematoGraphy Course in Pune</p>
           </div>
        </span>
        <Footer/>
    </div>
  )
}
