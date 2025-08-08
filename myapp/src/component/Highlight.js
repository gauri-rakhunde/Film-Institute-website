import React from 'react'
import H1 from '../images/hii1.png'
import H2 from '../images/hi3.png'
import H3 from '../images/hi4.png'
import H4 from '../images/hi5.png'
import H5 from '../images/hii2.png'
import H6 from '../images/hi6.png'
import H7 from '../images/hi7.png'
import H8 from '../images/hi8.png'
export default function Highlight() {
  return (
    <div className='highlight'> 
    <p style={{color:'rgb(137, 130, 130)'}}>Hii</p>
     <h1 style={{textAlign:'center'}}>HIGHLIGHT</h1>
     <center><hr className='bee'/></center>
      <div className='h1-container'>
       <img src={H1} alt={"H1"} />
       <img src={H2} alt={"H2"} />
       <img src={H3} alt={"H3"} />
       <img src={H4} alt={"H4"} />
       </div>

       <div className='h1-container'>
       <img src={H5} alt={"H5"} />
       <img src={H6} alt={"H6"} />
       <img src={H7} alt={"H7"} />
       <img src={H8} alt={"H8"} />
       </div>
    
    
    </div>
  )
}
