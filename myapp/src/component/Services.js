import React, {useEffect,useState} from 'react'

export default function Services() {
    const[data,setData]=useState([]);
    async function getData(){
     
    }
    useEffect(()=>{
      getData();
    },)

      async function getData(){
      let result = await fetch("http://localhost:4900/");
      result=await result.json();
      setData(result)
        
      }       
        




    
  return (
    <div>
        <h1>User list</h1>


       {/* {
        data.map(())=>
       } */}

    </div>
  )
}
