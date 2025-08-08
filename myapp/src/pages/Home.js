import React from 'react'

import Navbar from '../component/Navbar'
import Quotes from '../component/Quotes'

import Footer from '../component/footer'
import Welcome from '../component/welcome'
import Highlight from '../component/Highlight'
import Become from '../component/Become'
// import Re from '../component/Recruiters'
import NBi from '../images/NBii.png'
import Niiii from '../images/Niiii.png'
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className='img1'>
     
     <Navbar/>
     
     <hr className='new4'/> 
     
       <p className='div2'>
        WELCOME TO STARLIGHT FILM INSTITUTE
        <img src={Niiii} alt={"Niiii"} />
        </p>
        <div className="div22">
       <img src={NBi} alt={"NBi"} />
       </div>
      <Quotes/>
      {/* <Box/> */}
      
    </div>
    <Highlight/>
    <Welcome/>
    
    <Become/>
    {/* <Re/> */}
    <section className="service-grid pb-5 pt-5">
       
        <div className='divvv'>
            <div className="row">
                <div className="col-xl-12 text-center mb-4">
                    <div className="service-title">
                        <h1>Our Services</h1>
                    </div>
                </div>
            </div>
            
            <div className="row">
              
              <div className="col-lg-4 col-md-6 text-center mb-3">
                    
                    <div className="service-wrap1">
                        <div className="service-icon">
                            <i className="fas fa-layer-group"></i>
                        </div>
						<h2>LIBRARY</h2>
                        <h4>Gajanan Jagirdar Library (Book and Video)</h4>
						<Link to="/Library">Read More</Link>
            
                 </div>
           </div>
                        
          
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap2">
                        <div className="service-icon">
                            <i className="far fa-chart-bar"></i>
                        </div>
                        <h2>Screening Facilities</h2>
                        <h4>Main Theatre,CRT,Preview Theatre</h4>
                        <Link to="/Screening">Read More</Link>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap3">
                        <div className="service-icon">
                            <i className="fas fa-database"></i>
                        </div>
						<h3>Accommodation</h3>
                        <h4>Girls Hostel and Boys Hostel</h4>
                        <Link to="/Accomodation">Read More</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap4">
                        
                      <h2>IT infrastructure</h2>
                      <pre>                              </pre>
                       <Link to="/IT">Read More</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap5">
                        <h2>Sports</h2> 
                        <h4>Sports,GYM and Swimming Pool</h4>                      
                        <Link to="/Sports">Read More</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <Footer/>
   </>
  )
}
