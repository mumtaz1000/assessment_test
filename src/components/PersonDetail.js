import React, { useState } from "react"

const PersonDetail = (name) => {
const [show, setShow] = useState(false)

function open(){
  setShow(!show)
}

function close(){
  setShow(!show);
}
if(!show){
  return <ul >
          {Object.entries(name).map(([key, value]) => (
            <li id="personName" key={key} onClick={open} >{value.name} </li>
          ))}
        </ul>
}

    return (
        <ul >
          {Object.entries(name).map(([key, value]) => (
            <li key={key} >{value.name} height is :{value.height} and  eye color is :{value.eye_color}</li>
          ))}
          <button onClick={close}>Hide Info</button>
        </ul>
      );
}
 
export default PersonDetail;