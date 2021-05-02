import React, { useEffect, useState } from "react"

const PersonDetail = (name) => {
const [reqName, setReqName] = useState(name)
const [show, setShow] = useState(true)
const handleChange =()=>{
    setShow(false);
   
}
useEffect(()=>{
setShow(true)
setReqName(name)
},[name])

    return (
        <ul style={{ display: show ? "block" : "none" }}>
          {Object.entries(reqName).map(([key, value]) => (
            <li key={key} id="info" >{value.name} height is :{value.height} and  eye color is :{value.eye_color}</li>
          ))}
          <button onClick={handleChange}>Hide Info</button>
        </ul>
      );
}
 
export default PersonDetail;