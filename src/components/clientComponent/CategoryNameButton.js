'use client'

import Link from 'next/link';
import React from 'react';

const CategoryNameButton = (props) => {
    return (
        <Link
            className={`hover:border-b border-black block h-6 box-border mt-5 capitalize ${props?.isActive ? 'active' : ''}`}
            key={props?.eachCategory}
            onClick={() => {
                // handleCategoryClick(eachCategory)
                // Assuming you have a function to handle category clicks
            }}
            href={`/category/${props?.eachCategory}`}

            style={props?.styles}
        >
            {props?.eachCategory}
        </Link>
    )
}

export default CategoryNameButton;
