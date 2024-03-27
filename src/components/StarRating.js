import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} style={{ color: 'orange', fontSize: '20px' }} />);
    }
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key={stars.length} style={{ color: 'orange', fontSize: '20px' }} />);
    }

    return <div className='flex gap-1'>
        {stars}
        ({rating})
    </div>;
};

export default StarRating;
