import React from 'react'
import B1 from '../images/B1.jpg'
import B2 from '../images/B2.jpg'
import B3 from '../images/B3.jpg'
import B4 from '../images/B4.jpg'
import B5 from '../images/B5.jpg'
import B6 from '../images/B6.jpg'
import B7 from '../images/B7.jpg'

import B9 from '../images/B9.jpg'

import B11 from '../images/B11.jpg'
import B12 from '../images/B12.jpg'


export default function Become() {
  return (
    <div >
        <p className='hed'><b>YOU CAN <span style={{color:'purple'}}>BECOME</span></b></p>
        <center><hr className='be'/></center>
        
        <span className='b-container'>
        <div className='b' ><img src={B1} alt={"B1"} />Director Fiction /<span style={{color:'purple'}}> Non-Fiction</span></div>
        <div className='b' ><img src={B2} alt={"B2"} />Line <span style={{color:'purple'}}>Producer</span></div>
        <div className='b' ><img src={B3} alt={"B3"} />Production <span style={{color:'purple'}}>Controller</span></div>
        <div className='b' ><img src={B4} alt={"B4"} />Executive <span style={{color:'purple'}}>Producer</span></div>
        <div className='b' ><img src={B5} alt={"B1"} />Short Film <span style={{color:'purple'}}>Maker</span></div>
        
        </span>

        <span className='b-container'>
        <div className='b'><img src={B9} alt={"B1"} />Cenemato<span style={{color:'purple'}}>grapher</span></div>
        <div className='b' ><img src={B6} alt={"B1"} />Film Researchers <span style={{color:'purple'}}>And Ethic</span></div>
        <div className='b' ><img src={B7} alt={"B1"} />Video <span style={{color:'purple'}}>Editor</span></div>
        <div className='b' ><img src={B12} alt={"B1"} />Script <span style={{color:'purple'}}>Writer</span></div>
        <div className='b' ><img src={B11} alt={"B1"} />Ass. <span style={{color:'purple'}}>Director</span></div>
        </span>

        
    </div>
  )
}
