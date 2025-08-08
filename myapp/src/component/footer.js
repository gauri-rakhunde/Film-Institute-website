import React from "react";
import icon4 from '../images/meta.png'
import F1 from '../images/f1.png'
import F2 from '../images/f2.png'
import F3 from '../images/f3.png'

function Footer1()
{
    return(
        <>
  <div className="footer1">
    <img src={F1} alt={"F1"} />
    <img src={F2} alt={"F2"} />
    <img src={F3} alt={"F3"} />

  <div className="body">
    <span className='line1'> 42-C,Raviraj,Jawhar Nagar, University Road, pune, 411 412 (INDIA)</span>
    
    <span className='line2'>+91 9911107199
     +91 9996507859</span>
    <span className='line3'>info@starlight.in</span>
    
    
    </div>

  <hr/>
  <div className="img6">
  <img src={icon4} alt={"img4"}></img>
  <span style={{marginTop:'10px'}}>Copyright</span>
  </div>
</div>
</>
    )
}

export default Footer1;