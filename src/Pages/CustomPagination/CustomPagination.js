import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './CustomPagination.css';

const CustomPagination = ({setPage,numOfPages=20}) => {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    return (
        <div className='pagecs' style={{marginBottom:30}}>
              <Stack spacing={2}>
      <Pagination variant="outlined" onChange={(e)=>handlePageChange(e.target.textContent)} count={numOfPages} />
    </Stack>
        </div>
    );
};

export default CustomPagination;