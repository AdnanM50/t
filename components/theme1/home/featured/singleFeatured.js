import { Rate } from 'antd';
import React from 'react';
import { FaBath } from 'react-icons/fa';
import { FiHome, FiMaximize, FiStar } from 'react-icons/fi';

const SingleFeatured = ({theme1}) => {
    
    return (
        <div className="md:flex">
            <div className="basis-1/2 relative px-2 pb-5 md:pb-0">
                <div className=" ">
                    <p className={`paragraph_3 py-8 ${theme1 ? 'dark:text-violet-100 text-black' : '!text-black'}`}> A residential project that offers affordable
                        and spacious apartments with modern amenities and scenic views. The project aims to provide
                        quality housing for middle-income families in a convenient and safe location.</p>
                </div>
                <div className="flex flex-wrap mb-5 md:mb-0">
                    <h1 className={`header_4 !font-bold hover:text-hover_color cursor-pointer transition-all ease-in-out pr-8 ${theme1 ? 'text-dark_text dark:text-violet-100' : 'text-dark_text'}`}>Property for Rent</h1>
                    <h1 className={`header_4 !font-bold hover:text-hover_color cursor-pointer transition-all ease-in-out ${theme1 ? 'text-dark_text dark:text-violet-100' : 'text-dark_text'}`}>Property for Seals</h1>
                </div>
                <div
                    className={`flex flex-wrap justify-between md:py-5 md:pr-5 md:absolute lg:-bottom-20  md:w-[700px] w-full  z-10 ${theme1 ? 'dark:bg-neutral-800 bg-white' : 'bg-white'}`}>
                    <div className="">
                        <h1 className={`header_3 ${theme1 ? 'text-dark_text dark:text-white' : 'text-dark_text'}`}>Nice Apartment for Rent</h1>
                        <p className={`paragraph_1 ${theme1 ? 'text-secondary_text dark:text-violet-100' : 'text-secondary_text'}`}>New Jersey, New York</p>
                        <div className="flex mt-2 space-x-3">
                            <div className="flex items-center">
                                <FiHome className='!text-hover_color' />
                                <p className={`px-2 paragraph_6 ${theme1 ? 'dark:text-white text-dark_text' : 'text-dark_text'}`}>5 Beds</p>
                            </div>
                            <div className="flex">
                                <FaBath className='!text-hover_color' />
                                <p className={`px-2 paragraph_6 ${theme1 ? 'text-dark_text dark:text-white' : 'text-dark_text'}`}>3 Baths</p>
                            </div>
                            <div className="flex">
                                <FiMaximize className='!text-hover_color' />
                                <p className={`px-2 paragraph_6 ${theme1 ? 'text-dark_text dark:text-white' : 'text-dark_text'}`}>720 sqft</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0">
                        <div className="">
                            <p className={`paragraph_6 ${theme1 ? 'text-dark_text dark:text-gray-400' : 'text-secondary_text'}`}>Price</p>
                            <p className={`header_7 ${theme1 ? 'text-white' : 'text-dark_text'}`}>$125.900,00</p>
                        </div>
                        <div className="">
                            <p className={`paragraph_6 pt-2 ${theme1 ? 'text-secondary_text dark:text-gray-400' : 'text-secondary_text'}`}>Ratings</p>
                            <div className="flex items-center">
                                <div className="flex">
                                    <Rate
                                        character={<FiStar />}
                                        className='!text-hover_color'
                                        disabled
                                        defaultValue={2} />
                                </div>
                                <p className={`paragraph_6 ${theme1 ? 'text-secondary_text dark:text-gray-400' : 'text-secondary_text'}`}>(24)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="basis-1/2">

                <div className="md:absolute">
                    <img src="/featured.png" alt="" />
                </div>
                <div className="md:mt-[430px] mt-5">
                    <img src="./img/Arrow.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleFeatured;