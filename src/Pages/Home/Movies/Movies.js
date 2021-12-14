import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useGenres from '../../../hooks/useGenres';
import CustomPagination from '../../CustomPagination/CustomPagination';
import Genres from '../Genres/Genres';
import SingleContent from '../SingleContent/SingleContent';

const Movies = () => {
    const[page,setPage]=useState(1);
    const [numOfPages, setNumOfPages]=useState([]);
    const [content, setContent]=useState([]);
    const [selectedGens, setSelectedGens]=useState([]);
    const [genres, setGenres]=useState([]);
    const genreforURL=useGenres(selectedGens);
    const fetchMovies=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
       setContent(data.results);
       setNumOfPages(data.total_pages);
    }
    useEffect(()=>{
        fetchMovies();
    },[page,genreforURL])
    return (
        <div>
            <span className='pagetitle'>Movies</span>
            <Container>
                <Genres type='tv' selectedGens={selectedGens} setSelectedGens={setSelectedGens} genres={genres} setGenres={setGenres} setPage={setPage} />
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
           <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
          </Container>
        </div>
    );
};

export default Movies;