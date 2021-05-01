import { useEffect, useState } from "react";
import axios from "axios"
import Peoples from "./Peoples";

const PaginationComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let [pageNo, setPageNo] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")


const fetchData = async () =>{
    setLoading(true)
    const response = await axios.get(`https://swapi.dev/api/people/?page=${pageNo}`)
    setData(response.data.results)
    setLoading(false)
    
}

function handleChange(){
    setPageNo(pageNo+1)
    fetchData()
}

function goBack(){
    setPageNo(pageNo-1)
    fetchData()
}

const search = async() => {
    setLoading(true)
    const response = await axios.get(`https://swapi.dev/api/people/?search=${searchQuery}`)
    setData(response.data.results)
    setLoading(false)
}

useEffect(()=>{
    handleChange()
},[])
   return ( 
        <div>
            <h1>Starwar api</h1>
            <input type="text" 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            />
            <button onClick={search}>Search</button>
            <br/>
            <Peoples data={data} loading={loading} />
            <button type="submit" onClick={goBack}>
            <span>&#8810;</span>
             </button>
            <button type="submit" onClick={handleChange}>
            <span>&#8811;</span>
             </button>
             
        </div>
     );
}
 
export default PaginationComponent;