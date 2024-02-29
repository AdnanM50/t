"use client";
import { Carousel } from 'antd';
import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaBath, FaCamera, FaRegHeart } from 'react-icons/fa';
import { FaBed, FaHeart, FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6';

const SingleProperty = ({ item }) => {
    const carouselRef = useRef(null);
    return (
        <div className='relative group rounded-b-md shadow-lg'>
            <div className='relative'>
                <div onClick={() => carouselRef.current.prev()} className='absolute left-2 z-50 top-1/2 grid h-7 w-7 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white'>
                    <AiOutlineLeft></AiOutlineLeft>
                </div>
                <div onClick={() => carouselRef.current.next()} className='absolute right-2 z-50 top-1/2 grid h-7 w-7 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white'>
                    <AiOutlineRight></AiOutlineRight>
                </div>
                <button className={`paragraph_7 absolute rounded left-2 top-2 ${item?.type === 'rent' ? 'bg-secondary' : 'bg-secondary_text'} px-3 py-2 text-white uppercase`}>
                    {item?.type}
                </button>
                <div className='absolute bottom-5 flex w-full items-center justify-between bg-opacity-20 px-8 py-2 text-lg text-white'>
                    <div className='flex items-center justify-center'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#888AA0] text-white'>
                            <FaLocationCrosshairs></FaLocationCrosshairs>
                        </div>
                        <p className='paragraph_7 ms-5 '>{item?.city}, {item?.country}</p>
                    </div>
                    <div className='flex items-center justify-center text-white'>
                        <span className='text-lg'>
                            <FaCamera></FaCamera>
                        </span>
                        <p className='paragraph_7 ps-3'>{item?.images?.length}</p>
                    </div>
                </div>
                <div className='relative -z-50'>
                    <Carousel autoplay ref={carouselRef}>
                        {
                            item?.images?.map((item, index) => <div key={index} className='w-full h-[240px]'>
                                <img className='w-full rounded-t-lg object-cover' src={item} alt='' />
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
            <div className='p-4'>
            <div className='flex items-center justify-between py-4 text-2xl'>
                <Link href={`/property/${item?._id}`}>
                    <h1 className='header_4 cursor-pointer !font-bold'>{item?.title}</h1>
                </Link>
                <h2 className='header_4 !font-bold text-primary'>${item?.price}</h2>
            </div>
            <div className='pb-36' dangerouslySetInnerHTML={{ __html: item?.description.slice(0, 200) }}></div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 p-4'>
                <div className='my-5 flex items-center justify-between border p-2 text-gray-600'>
                    <div className='flex basis-1/3 items-center justify-center'>
                        <span className='text-lg'>
                            <FaBed />
                        </span>
                        <p className='ps-2'>{item?.bedrooms}</p>
                    </div>
                    <div className='flex basis-1/3 items-center justify-center border-x-2'>
                        <span className='text-lg'>
                            <FaBath></FaBath>
                        </span>
                        <p className='ps-2'>{item?.bathrooms}</p>
                    </div>
                    <div className='flex basis-1/3 items-center justify-center'>
                        <i className='fa-solid fa-location-dot text-lg'></i>
                        <span className='text-lg'>
                            <FaLocationDot></FaLocationDot>
                        </span>
                        <p className='ps-2'>4</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img className='rounded-full h-[48px] w-[48px] object-cover' src={item?.agent?.image ? item?.agent?.image : './man.png'} alt='' />
                        </div>
                        <p className='paragraph_9 ps-5'>{item?.agent?.name}</p>
                    </div>
                    <div className='flex'>
                        <Link href={`/property/${item?._id}`}>
                            <button className=' rounded-md border border-secondary_text px-4 py-2 text-secondary_text transition-all ease-in-out group-hover:bg-primary group-hover:text-white '>
                                View
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProperty;