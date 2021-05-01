import React, {useState, useEffect} from "react"
import PersonDetail from "./PersonDetail"
const Peoples = ({data, loading}) => {
const [reqName, setReqName] = useState("")
useEffect(()=>{
    setReqName("")
},[])
    if(loading){
        return <h2>Loading...</h2>
    }
    

    return <ul>
        {data.map((people,index) => (
            <li key={index}
            onClick={()=>{setReqName(people);
            <PersonDetail name={reqName} />}}>
            {people.name}</li>
        ))}
{reqName && <PersonDetail name={reqName} />}
        </ul>
}

export default Peoples;