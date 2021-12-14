import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

const Genres = ({type,selectedGens,setSelectedGens,genres,setGenres,setPage}) => {
    
    const fetchGenres=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API}&language=en-US`);
        
        setGenres(data.genres);
       
    }
    console.log(genres);

    useEffect(()=>{
        fetchGenres();
    },[]);

    const handleAdd = (genre) => {
        setSelectedGens([...selectedGens, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGens(
            selectedGens.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    return (
        <div style={{marginBottom:20,textAlign:'center'}}>
           {
               selectedGens.map((genre)=>(
                 <Chip label={genre.name} style={{backgroundColor:'#FF8E00',color:'white' ,padding:5, margin:3}} clickable key={genre.id} onClick={() => handleAdd(genre)} onDelete={() => handleRemove(genre)}/>
                       
               ))
           }
           {
               genres.map((genre)=>(
                 <Chip label={genre.name} style={{backgroundColor:'whitesmoke' ,padding:5, margin:3}} clickable key={genre.id} onClick={() => handleAdd(genre)}/>
                       
               ))
           }
        </div>
    );
};

export default Genres;