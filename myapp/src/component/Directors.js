import React from 'react'
import D1 from '../images/About/D1.jpg'
import D2 from '../images/About/D2.jpg'
import D3 from '../images/About/D3.jpg'
import D4 from '../images/About/D4.jpg'
import Redline from '../images/Redline.png'
export default function Directors() {
  return (
    <div>
        <h1 style={{textAlign:'center', marginTop:'0px', marginBottom:'50px'}}>Board of <span style={{color:'red'}}>Directors</span></h1>
        <span className="rl">
          <center>
        <img src={Redline} alt={"Redline"} />
        </center>
        </span>
        <span className="box-container">
          <div className="box">
           <img src={D1} alt={"D1"} />
           <p><b>Allu Arjun</b><br/>
            He is the backbone of the entire Starlight Family, him strong leadership, regular visits, and interaction keep motivating each and every member of the organization. Her constant guidance and support create the right path towards achieving new heights for the organization and personal too.</p>
            </div>
            <hr/>
            <div className="box">
            <img src={D2} alt={"D2"} />
           <p><b>Sai Pallavi</b><br/>
           Our vision for Starlight expands to gearing the young film makers with the best of professional training and experience that will bring the best of knowledge & exposure to them in the industry. Starlight aims to make it students stand out from other film making institutes in every sphere.</p>
           </div>
        </span>

        <span className="box-container">
          <div className="box">
           <img src={D3} alt={"D3"} />
           <p><b>Mahesh Babu</b><br/>
           Starlight Film & Television Institute of India is going to be the next big name for garnering excellence in Filmmaking specialism across the country. We aim to train & groom the budding filmmakers in a  facilities & equipments.</p>
            </div>
            <hr/>
            <div className="box">
            <img src={D4} alt={"D4"} />
           <p><b>Yash</b><br/>
           Starlight Film & Television Institute of India will explore a wide range of filmmaking specialism areas. A great opportunity for beginners out there to learn from the industry experts and get trained professionally. All the best.</p>
           </div>
        </span>
        
        
    </div>
  )
}
