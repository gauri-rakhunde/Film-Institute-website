import React from 'react'
import A1 from '../images/About/A1.jpg'
import A2 from '../images/About/A2.jpg'
import A3 from '../images/About/A3.jpg'
import A4 from '../images/About/A4.jpg'
import A55 from '../images/About/A55.jpg'
import A6 from '../images/About/A6.jpg'
import Redline from '../images/Redline.png'
export default function Advisory() {
  return (
    <div>
       <h1 style={{textAlign:'center', marginTop:'100px', marginBottom:'50px'}}>Advisory <span style={{color:'red'}}>Board</span></h1>
       <span className="rl">
          <center><img src={Redline} alt={"Redline"} /></center>
        </span>
       <span className="Ai">
        <img src={A1} alt={"A1"} />
        <img src={A2} alt={"A2"} />
         <img src={A3} alt={"A3"} />
        </span>
       <span className="Ai">
       <p style={{marginLeft:'40px'}}><b>Ram Charan</b><br/>Actor and singer</p>
       <p><b>Kirti Suresh</b><br/>Actor and Dancer</p>
       <p style={{marginRight:'20px'}}><b>Kalyani Priydarshan</b><br/>Music Director</p>
       </span>
      <span className="Ai">
        <img src={A4} alt={"A4"} />
        <img src={A55} alt={"A55"} />
         <img src={A6} alt={"A6"} />
         </span>
       <span className="Ai">
       <p style={{marginLeft:'40px'}}><b>Vijay Thalapathy</b><br/>Producer and Director</p>
       <p><b>Akhil Akkhineni</b><br/>Music Producer</p>
       <p style={{marginRight:'40px'}}><b>Surya Sivakumar</b><br/>Actor and Dancer</p> </span>
      </div>
  )
}
