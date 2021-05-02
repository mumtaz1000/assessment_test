import React from "react"
import PersonDetail from "./PersonDetail"
const Peoples = ({data, loading}) => {

    if(loading){
        return <h2>Loading...</h2>
    }
    

    return <ul>
        {data.map((people) => (
            <PersonDetail name={people} />
            
        ))}

        </ul>
}

export default Peoples;