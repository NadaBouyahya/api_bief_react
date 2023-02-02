import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchComponent from "./layouts/SearchComponent"


function Show() {
    
    const [univData, SetData] = useState([]);
    const [searhData, setSearchData] = useState([]);
    const [filterVal, setFilterVal] = useState('');

    const [url, SetUrl] = useState(["http://universities.hipolabs.com/search?country=morocco"]);

    useEffect(() => {
        axios.get(url).then((res) => {
            SetData(res.data);
            console.log(res.data);
            setSearchData(res.data);
        })
    }, [])

    const handleSearch = (e) =>{
        // console.log(filterVal);
        if (e.target.value === '') {
            SetData(searhData)
        }
    
        else{
           const filterResult = searhData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
           SetData(filterResult)
        }
        setFilterVal(e.target.value)
    }

    return (
        <>
            <SearchComponent handle_search={handleSearch}/>
            
            <div className="flex flex-wrap gap-3">
                {univData.map((item) => {
                    return <div className=' flex flex-col p-[25px] w-[30%]' style={{ background: '#E5D3D3' }}>
                        <span>{item.name}</span>
                        <span className='mt-10'> <a className='pt-2 pb-2 pr-4 pl-4' style={{ background: "gray" }} href={item.web_pages} target="_blank"> visit </a></span>
                    </div>
                })}
            </div>
        </>

    )
}

export default Show;
