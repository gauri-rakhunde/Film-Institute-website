import React from 'react';

import C1 from '../images/Contact/C1.jpg'
import C2 from '../images/Contact/C2.jpg'
import C3 from '../images/Contact/C3.jpg'
import C4 from '../images/Contact/C4.jpg'
import map from '../images/Contact/map.jpg'
import i1 from '../images/Contact/1.png'
import i2 from '../images/Contact/2.png'
import Footer from '../component/footer'
import img2 from '../images/StarLight.png'
import logo from '../images/logo.jpg'

export default function Contactus() {
return (
  <div>
     
    <div className='CCBi'>
    <div style={{marginTop:'-80px'}}>


<div className='img12'>
<nav className="navbar navbar-expand-lg navbar-light " >
<div className="container-fluid">
<div className="logo">
    <img src={img2} alt={"image23"} />
</div>
<a className="navbar-brand" href="/" style={{color:'white', fontWeight:'bold',marginLeft:'10px'}}>StarLight</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-4 mb-lg-0" >
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/" style={{fontWeight:'bold',color:'white',marginLeft:'200px',marginRight:'40px'}}>Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/Aboutus" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>About Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/Contactus" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>Contact Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/Courses" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>Courses</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/Admission" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>Admission</a>
    </li>
   
  </ul>
  <div className='logoo'>
  <img src={logo} alt={"logo"}/>
  </div>
</div>
</div>
</nav>
</div>
</div>
      
      <p className='hid2'>Contact Starlight</p>
       <div className='boox-container'>
      
      <div className='boox' >
        <img src={i1} alt={"i1"} />
        <p className='booxtext'>
          <b style={{textSize:'40px'}}>Contact Us</b><br/><br/>
          Just want to say hi? We'd love to hear from you. We love our Students and community! 
        </p>
        <center>
              <button className='buttt' type='submit'>
                Send us A Message
              </button>
            </center>
      </div>
      

      <div className='boox' >
      <img src={i2} alt={"i2"} />
        <p className='booxtext'>
          <b >Get Support</b><br/><br/>
          Have an issue with an teacher or with a course you registered from us? Fill out our support form.
        </p>
        <center>
              <button className='buttt' type='submit'>
                Contact Support
              </button>
            </center>
      </div>
      </div>
      
    </div>

     <div style={{marginTop:'100px'}}>
        <div className="contact-container">
        
          <h3  style={{marginBottom:'10px',color:'gold',marginLeft:'50px',fontFamily: 'Times New Roman'}}>Get in touch</h3>
            <div className='imag-infoo-container'>
                <img src={C1} alt="img3" className="imag" />  
                <div className="infoo">
                <p>9456823167</p>  
                </div>
            </div>
            <div className='imag-infoo-container'>
                <img src={C2} alt="img3" className="imag" />  
                <div className="infoo">
                <p>info@starlight.in</p>  
                </div>
            </div>
            <div className='imag-infoo-container'>
                <img src={C3} alt="img3" className="imag" />  
                <div className="infoo">
                <p>http://www.starlight.com/</p>  
                </div>
            </div>
            <div className='imag-infoo-container'>
                <img src={C4} alt="img3" className="imag" />  
                <div className="infoo">
                <p style={{marginRight:'600px'}}>42-C,Raviraj,Jawhar Nagar, University Road, pune, 411 412 (INDIA)</p>  
                </div>
            </div>

             <img src={map} alt={"map"} style={{width:'500px', height:'400px',marginTop:'-250px',marginLeft:'490px'}}/>
          </div>
          
      </div> 
      <Footer/>
      </div>
  );
}