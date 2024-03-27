import React from 'react';
import NoItem from '../../public/icons/NoItem.svg';


const NotFound = (props) => {
    return (
        <div className='w-full flex flex-col items-center justify-center my-4'>

            <NoItem
                // className="w-12 h-12"
                alt="not-found"
            />

            <div className='font-semibold text-2xl my-2'>
                {props?.message}
            </div>

            <div className='my-4'>
                {props?.detailsMessage}
            </div>

        </div>
    );
}

export default NotFound;
