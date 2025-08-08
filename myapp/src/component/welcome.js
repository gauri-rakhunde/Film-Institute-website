import React from 'react'
import Ins from '../images/institute.jpg'
import Inf from '../images/infrastructure.jpg'
import i1 from '../images/img1.jpg'
import i2 from '../images/imgg2.jpg'
import i3 from '../images/img3.jpg'
import i4 from '../images/img4.jpg'
import i5 from '../images/img5.jpg'
export default function welcome() {
  return (
    <span className='wel-container'>
    <div className='welcome'>
    <h2 style={{marginLeft:'100px'}}>WELCOME TO <span style={{color:'red'}}>STARLIGHT !</span></h2>
    <p style={{marginRight:'350px'}}>Heritage Institute of Management & Communication is the most highly developed 
        Institute of its kind provides practical training to the students in the field of 
        Journalism & Mass Communication from day one with its highly qualified and experienced 
        core and guest faculty. There is a huge potential for creative talent in India. The 
        sector is facing an acute shortage of trained personnel. Media platforms-channels and 
        production houses-both desperately seek quality-trained manpower in various 
        functions involved in the making of a successful media product.</p>
    
    
    <span className='wi'>
    <img src={Ins} alt={"Institute"} width='350px' height='200px'/>
    <img src={Inf} alt={"Infrastructure"} width='350px' height='200px'/>
    </span>

    <span className="wi1">
    <p><b>THE <span style={{color:'red'}}>INSTITUTE</span></b><br/>
    <span >There is a huge potential for creative talent in India. The sector is facing an acute 
    shortage of trained personnel.</span></p>

    <p><b>OUR <span style={{color:'red'}}>INFRASTRUCTURE</span></b><br/>
    <span>It has been argued that one can become a media person just by joining a media institute/
    college, without any exposure to the real media industry.</span></p>
    </span>
    </div>
     
    
    <div className='welcome2'>
    <b className='hed1'>WHY <span style={{color: 'red'}}>STARLIGHT !</span></b>  <br/>
    <div className='image-info-container'>
        <img src={i1} alt="img1" className="image" />  
        <div className="info">
            <p>Get 100% assured placement assistance on the basis of our live TV & Radio studio, 
                newsroom, training in 24X7 Channels.</p>  
        </div>
    </div>
    <hr className='w'/>
    <div className='image-info-container'>
        <img src={i2} alt="img2" className="image" />  
        <div className="info">
            <p>Dual Course Qualification programme offers Bachelors & Masters Degree in 
              Journalism & Mass Communication along with industry integrated highly 
              professional Diplomas.</p>  
        </div>
    </div>
    <hr className='w'/>
    <div className='image-info-container'>
        <img src={i3} alt="img3" className="image" />  
        <div className="info">
            <p>Get Scholarships if you are a highly talented and deserving candidate.</p>  
        </div>
    </div>
    <hr className='w'/>
    <div className='image-info-container'>
        <img src={i4} alt="img4" className="image" />  
        <div className="info">
            <p>Get dynamically trained by top-notched broadcast professionals from various 
              news channels.</p>  
        </div>
    </div>
    <hr className='w'/>
    <div className='image-info-container'>
        <img src={i5} alt="img5" className="image" />  
        <div className="info">
            <p>World-Class Infrastructure with state of Art facilities</p>  
        </div>
    </div>
</div>


    

    </span>
  )
}
