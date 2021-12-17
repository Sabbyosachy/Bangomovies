import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useEffect } from 'react';
import './BottomNav.css';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';


const BottomNav = () => {
    const [value, setValue] = React.useState(0);
    const history=useNavigate();

    useEffect(()=>{
          if(value===0)
            history("/");
         else if(value===1)
            history("/movies");
         else if(value===2)
            history("/tvseries");
         else if(value===3)
            history("/search");
    },[value,history])

    return (
        <div>
            <Box className="navbg" sx={{bottom:0,position:"fixed", width:"100%"}}>
      <BottomNavigation
      className='navbot'
      sx={{backgroundColor:"#1c2331"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction  style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction   style={{color:"white"}} label="Tv-Series" icon={<TvIcon/>} />
      </BottomNavigation>
    </Box>
        </div>
    );
};

export default BottomNav;