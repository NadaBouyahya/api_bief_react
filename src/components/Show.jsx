import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Show(props) {
    const [univData, SetData] = useState([]);
    const [url, SetUrl] = useState(["http://universities.hipolabs.com/search?country=morocco"]);

    useEffect(() => {
        axios.get(url).then((res)=>{
            SetData(res.data);
            console.log(res.data);
        })
    },[])

 
    return (
        <div className="flex flex-wrap gap-3">
            {univData.map( (item) => {
                return <div className=' flex flex-col p-[25px] w-[30%]' style={{background:'#E5D3D3'}}>
                    <span>{item.name}</span>
                    <span className='mt-10'> <a className='pt-2 pb-2 pr-4 pl-4' style={{background:"gray"}} href={item.web_pages} target="_blank"> visit </a></span>
                </div> 
            })}
        </div>
    )
}

export default Show;
