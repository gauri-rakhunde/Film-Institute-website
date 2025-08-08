import React, {useState} from 'react'

export default function RF() {
  const [Fname, setFname] = useState('');
  const [Password, setPassword] = useState('');
  const [Formdata, setformdata] = useState([]);

  async function getData(e) {
    let Formdata = {
      Fname,
      Password
    };
    e.preventDefault();
   
    setformdata(Formdata);
   console.log(Formdata);
   localStorage.setItem("userTable",JSON.stringify(Formdata))
    
    
  }
  
  
    return (
      <div >

    <div className='app' >
    
        <form action=""  className='login-form' onSubmit={getData}> 
        <h1 style={{fontSize:'40px',color:'rgb(187, 180, 180)',textShadow:'2px 2px black',textAlign:'center'}}>Log In</h1>
<hr/>
              <div> 
					<label className='title'>Name:</label>
					<input type="text" name="name" id="name" style={{height:'38px',width:'300px',fontFamily:'Times of Roman',marginLeft:'20px',marginTop:'10px'}} placeholder='Full Name' onChange={(e)=>setFname(e.target.value)}/> 
				</div> 
				
				<div> 
					<label htmlFor="passw" className='title'>Password:</label>
					<input type="text" name="passw" id="passw" style={{height:'38px',width:'300px',fontFamily:'Times of Roman',marginLeft:'20px',marginTop:'10px'}} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/> 
				</div>  
				      <center style={{marginTop:'20px'}}>
                <input type="Submit"/> 
                </center>
               
			</form>
    </div>
    </div>
  )
}





