import axios from 'axios';
import { useEffect, useState } from 'react';
import './Trending.css';
import SingleContent from '../SingleContent/SingleContent';
import { Container } from '@mui/material';
import CustomPagination from '../../CustomPagination/CustomPagination';

const Trending = () => {
    const [content, setContent]=useState([]);
    const[page,setPage]=useState(1);
    const fetchTreanding= async ()=>{
       const { data }= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API}&page=${page}`)
         
       setContent(data.results);

    }
    useEffect(()=>{
       fetchTreanding();
    },[page])

    
    return (
        <div>
            <span className='pagetitle'>Trending</span>
          <Container>
          <div className='trends'>
             {
                 content && content.map((c)=>(
                    <SingleContent 
                    key={c.id}
                    id={c.id} 
                    poster={c.poster_path} 
                    title={c.title || c.name} 
                    date={c.release_date || c.first_air_date} 
                    media_type={c.media_type}
                    rating={c.vote_average}
                    />
                 ))
             }
           </div>
           <CustomPagination setPage={setPage}/>
          </Container>
        </div>
    );
};

export default Trending;