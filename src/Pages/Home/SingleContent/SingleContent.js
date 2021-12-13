import React from 'react';
import './SingleContent.css';
import { img_300, unavailable } from '../../../config/config';
import { Badge } from '@mui/material';
const SingleContent = ({key,poster,title,date,media_type,rating}) => {
    return (
        <div className='media'>
              <Badge badgeContent={rating} color={rating>6 ? "primary" : "warning" }></Badge>
            <img className='poster' src={poster ? `${img_300}/${poster}`: unavailable} alt="" srcset="" />
            <b className='title'>{title}</b>
           <div className='subtitle'>
           <span>{media_type=="tv" ? "Tv Series" : "Movie"}</span>
            <span>{date}</span>
           </div>
        </div>
    );
};

export default SingleContent;