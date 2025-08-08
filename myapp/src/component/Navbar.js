import React from 'react'
// import img2 from '../images/StarLight.png'
import Starlightlogo from '../images/Starlightlogo.png'

export default function Navbar() {
  return (
    <div className='backC'>

    {/* function clearData() {
      localStorage.clear()
    } 

    let data=JSON.parse(localStorage.getItem("userTable")); */}
    <div className='img11'>
    <nav className="navbar navbar-expand-lg navbar-light " >
  <div className="container-fluid">
    <div className="logo">
        <img src={Starlightlogo} alt={"image23"} />
    </div>
    {/* <a className="navbar-brand" href="/" style={{color:'white', fontWeight:'bold',marginLeft:'10px'}}>StarLight</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-4 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{fontWeight:'bold',color:'white',marginLeft:'200px',
          marginRight:'40px'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Aboutus" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>
            About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Contactus" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>
            Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Courses" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>
            Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Admission" style={{fontWeight:'bold',color:'white',marginRight:'40px'}}>
            Admission</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
  )
}
