import React, { useState } from 'react';
import Datatable from './Datatable';
// import img2 from '../images/StarLight.png'
// import logo from '../images/logo.jpg'
import Navbar from './Navbar';

export default function Admission() {
  const [name, setName] = useState('');
  const [Contact, setContact] = useState('');
  const [Email, setEmail] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [Programme, setProgramme] = useState('');
  const [data, setdata] = useState([]);

  async function getData(e) {
    let data = {
      name,
      Contact,
      Email,
      State,
      City,
      Programme
    };
    e.preventDefault();
    let result=await fetch("http://localhost:4900/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(data)
    })
    result:await result.json();
    
    }




  return (
    <div>
    
    <Navbar/>
      <div className='FBi'>
        <div className='form-container'>
          <h2 className='h22' style={{ marginBottom: '10px' }}>
            ADMISSION OPEN
          </h2>
          <form action='' onSubmit={getData}>
          <div className="row">
              <div className="col-sm-6" style={{marginBottom:'20px'}}>
                <label className='bol'>Full Name</label>
                <input type="text" className="form-control" placeholder="Full name" style={{height:'38px',fontFamily:'Times of Roman'}} onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="col-sm-6" style={{marginBottom:'20px'}}>
              <label className='bol'>Contact Number</label>
                <input type="text" className="form-control" placeholder="Contact Number" style={{height:'38px',fontFamily:'Times of Roman'}}onChange={(e)=>setContact(e.target.value)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6" style={{marginBottom:'20px'}}>
              <label className='bol'>Email ID</label>
                <input type="email" className="form-control" placeholder="Email ID" style={{height:'38px',fontFamily:'Times of Roman'}}onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="col-sm-6" style={{marginBottom:'20px'}}>
              <label className='bol'>State</label>
                <input type="text" className="form-control" placeholder="State" style={{height:'38px',fontFamily:'Times of Roman'}}onChange={(e)=>setState(e.target.value)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6" style={{marginBottom:'20px'}}>
              <label className='bol'>City</label>
                <input type="text" className="form-control" placeholder="City" style={{height:'38px',fontFamily:'Times of Roman'}} onChange={(e)=>setCity(e.target.value)}/>
              </div>
              <div className="col-sm-6" style={{marginBottom:'20px'}}>
              <label className='bol' style={{fontFamily:'Times of Roman'}}>Select Programme</label>
                <select className="form-control" onChange={(e)=>setProgramme(e.target.value)}>
                  <option value="select">Select</option>
                  <option value="BSc in filmmaking">BSc in filmmaking</option>
                  <option value="MA in filmmaking and specialization">MA in filmmaking and specialization</option>
                  <option value="MA in screenwriting">MA in screenwriting</option>
                  <option value="Diploma in screenwriting">Diploma in screenwriting</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{marginBottom:'20px'}}>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck" style={{fontFamily:'Times of Roman'}}>
                  Check me out
                </label>
              </div>
            </div>

            <center>
              <button className='butt' type='submit'>
                Apply Now
              </button>
            </center>
          </form>
        </div>
      </div>

      <Datatable data={data} />
    </div>
  );
}

