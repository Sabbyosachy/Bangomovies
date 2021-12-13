import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleContent from '../SingleContent/SingleContent';

const Trending = () => {
    const [content, setContent]=useState([]);
    // const fetchTreanding= async ()=>{
    //    const { data }= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API}`)
         
    //    console.log(data);
    //    setContent(data.results)
    // }
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API}`)
        .then(res=>res.json())
        .then(data=>setContent(data))
    },[])
    console.log(content);
    
    return (
        <div>
            <span className='title'>Trending</span>
            {
           content.map(contents=><SingleContent contents={contents}></SingleContent>)
            }

        </div>
    );
};

export default Trending;