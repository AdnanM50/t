import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const WhoWeAre = ({theme1}) => {
    return (
        <div className="container">
            <div className="mx-auto flex flex-wrap mb-[6rem] mt-[8rem] ">
                <div className='md:w-1/2 w-full mb-5 h-[397px] md:h-[810px] lg:h-[530px]' >
                    <div className="relative">
                        <div className="w-[210px] h-[200px] md:w[476px] md:h-[444px] lg:w-[347px] lg:h-[367px] border-2 border-hover_color"></div>
                        <img alt="about" className="sm:w-[380px] h-[270px] w-[260px]  md:w-[740px] md:h-[710px] lg:h-[530px] lg:w-[490px] object-cover z-10 absolute top-10 left-7" src='/who.png' />
                    </div>
                </div>
                <div className="body md:pl-20 md:basis-1/2 sm:mt-6 md:mt-0">
                    <h1 className={`mt-2 header_2 ${theme1? 'text-dark_text dark:text-white' : 'text-dark_text'}`}>Who We Are?</h1>
                    <p className={`mt-8 paragraph_1 ${theme1? 'text-secondary_text dark:text-violet-100' : 'text-secondary_text'}`}>
                        We are a dynamic and innovative real estate company that provides comprehensive solutions for all your property needs. Whether you are looking for a new home, a commercial space, or an investment opportunity, we have the expertise and resources to help you achieve your goals. We are dedicated to creating long-term relationships with our clients based on trust and professionalism. We are a full-service real estate company that caters to the diverse needs of the real estate market in Bangladesh. We have a team of qualified and experienced professionals who can assist you with buying, selling, renting, or managing any type of property. We are passionate about delivering exceptional service and value to our clients and partners.
                    </p>
                    <p className={`mt-8 paragraph_1 ${theme1? 'text-secondary_text dark:text-violet-100' : 'text-secondary_text'}`}>
                        We are a dynamic and innovative real estate company that provides comprehensive solutions for all your property needs. Whether you are looking for a new home, a commercial space, or an investment opportunity, we have the expertise and resources to help you achieve your goals. We are dedicated to creating long-term relationships with our clients based on trust and professionalism.
                    </p>
                    <div className="flex items-center mt-6">
                        <div className="h-[2px] w-2/5 bg-secondary_text"></div>
                        <p className={`pl-2 header_5 ${theme1? 'text-secondary_text dark:text-violet-100' : 'text-dark_text'}`}>Contact Us</p>
                        <Link href="#" className="border rounded-full h-8 w-8 flex justify-center items-center ml-4  hover:bg-primary hover:text-white text-secondary_text transition-all">
                            <FiChevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;