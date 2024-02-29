import Link from 'next/link';
import React from 'react';
import { FiCalendar, FiChevronRight, FiUser } from 'react-icons/fi';

const Blogs = ({ theme1 }) => {
    return (
        <div className='blog pb-[80px] mt-[140px]'>
            <div className='container mx-auto py-10'>
                <div className='mb-12 flex w-full flex-wrap items-center '>
                    <h1
                        className={`header_2 basis-full md:basis-1/2 ${theme1 ? 'dark:text-white text-dark_text' : 'text-dark_text'}`}
                    >
                        News From Blog
                    </h1>
                    <div className='flex w-full items-center justify-end md:float-right md:w-3/6'>
                        <div className='h-[2px] w-1/5 bg-slate-400 md:w-3/5'></div>
                        <p
                            className={` px-3 text-lg ${theme1 ? 'dark:text-violet-100 text-dark_text' : 'text-dark_text'}`}
                        >
                            Explore All News
                        </p>
                        <Link
                            href=''
                            className='z-10 flex h-8 w-8 items-center justify-center rounded-full border border-secondary_text text-secondary_text  transition-all hover:bg-hover_color hover:text-white'
                        >
                            <FiChevronRight />
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                    <div className=''>
                        <div className='relative'>
                            <img className='object-cover' src='/blog1.png' alt='blog' />
                            <div
                                className={` absolute bottom-0 right-0 ${theme1 ? 'dark:bg-zinc-800 bg-white' : 'bg-white'}`}
                            >
                                <div
                                    className={`paragraph_6 flex items-center p-2 ${theme1 ? 'dark:text-violet-100 text-secondary_text' : 'text-secondary_text'}`}
                                >
                                    <FiCalendar />
                                    <p className='ps-2'>15 jun 2023</p>
                                </div>
                                <div
                                    className={`paragraph_6 flex items-center p-2 ${theme1 ? 'dark:text-violet-100 text-secondary_text' : 'text-secondary_text'}`}
                                >
                                    <FiUser />
                                    <p className='ps-2'>15 jun 2023</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between py-5'>
                            <p
                                className={`header_4 !font-bold ${theme1 ? 'text-white' : 'text-dark_text'}`}
                            >
                                Average U.S. Rental Price Hits A Two-Year High
                            </p>
                            <a
                                href=''
                                className='ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-secondary_text text-secondary_text  transition-all hover:bg-hover_color hover:text-white'
                            >
                                <FiChevronRight />
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative'>
                            <img className='object-cover' src='/blog2.png' alt='blog' />
                            <div
                                className={` absolute bottom-0 right-0 bg-white ${theme1 ? 'dark:bg-zinc-800 bg-white' : 'bg-white'}`}
                            >
                                <div
                                    className={`paragraph_6 flex items-center p-2 ${theme1 ? 'dark:text-violet-100 text-secondary_text' : 'text-secondary_text'}`}
                                >
                                    <FiCalendar />
                                    <p className='ps-2'>15 jun 2023</p>
                                </div>
                                <div
                                    className={`paragraph_6 flex items-center p-2 ${theme1 ? 'dark:text-violet-100 text-secondary_text' : 'text-secondary_text'}`}
                                >
                                    <FiUser />
                                    <p className='ps-2'>15 jun 2023</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between py-5'>
                            <p
                                className={`header_4 !font-bold ${theme1 ? 'text-dark_text dark:text-white' : 'text-dark_text'}`}
                            >
                                Average U.S. Rental Price Hits A Two-Year High
                            </p>
                            <a
                                href=''
                                className='ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-secondary_text text-secondary_text transition-all hover:bg-hover_color hover:text-white'
                            >
                                <FiChevronRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
