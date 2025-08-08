import React, {useEffect,useState} from 'react'


export default function Datatable() {

  const[data,setData]=useState([]);
    
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email ID</th>
            <th>State</th>
            <th>City</th>
            <th>Programme</th>
          </tr>
        </thead>
        <tbody>
          {data.map((formDataObject, index) => (
            <tr key={index}>
              <td>{formDataObject.name}</td>
              <td>{formDataObject.Contact}</td>
              <td>{formDataObject.Email}</td>
              <td>{formDataObject.State}</td>
              <td>{formDataObject.City}</td>
              <td>{formDataObject.Programme}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
