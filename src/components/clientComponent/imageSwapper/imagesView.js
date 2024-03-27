'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImagesView = (props) => {

    const [selectedImageURL, setSelectedImageURL] = useState(null);
    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        setSelectedImageURL(props?.thumbnail);
    }, [props]);


    return (
        <>

            {selectedImageURL &&
                <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Image
                        src={selectedImageURL}
                        className="mx-auto object-cover"
                        width={400}
                        height={500}
                        alt=""
                    />
                    {isHovered &&
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                            <Image
                                src={selectedImageURL}
                                className="mx-auto object-cover"
                                width={600} // Adjust the width and height for the zoomed-in image
                                height={750}
                                alt=""
                            />
                        </div>
                    }
                </div>
            }

            <div className="flex flex-wrap gap-4 mt-6">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={true} // Set showThumbs to true
                    infiniteLoop={true}
                    centerMode={true} // Set centerMode to true to show multiple images at a time
                    centerSlidePercentage={33.33} // Adjust the percentage to show three images at a time
                    emulateTouch={true} // Enable touch events
                    swipeable={true} // Enable swiping on touch devices
                >
                    {props?.images
                        ?.filter((image) => image !== selectedImageURL)
                        ?.map((eachImage, imageIndex) => (
                            <div key={`MultipleImage-${imageIndex}`}
                                onClick={() => setSelectedImageURL(eachImage)}
                                className='mx-4'
                            >
                                <Image
                                    src={eachImage}
                                    className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                                    width={100}
                                    height={100}
                                    alt=""
                                />
                            </div>
                        ))}
                </Carousel>
            </div>

        </>
    );
}

export default ImagesView;
