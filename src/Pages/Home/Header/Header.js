import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import './Header.css';

const Header = () => {
    return (
        <div>
           <div className='headdertext'> 
           <span className='text1'>BANGO MOVIES</span>
           <MovieIcon sx={{fontSize:30, color:'white'}}/>
           </div>
        </div>
    );
};

export default Header;