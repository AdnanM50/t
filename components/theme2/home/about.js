"use client"
import React, { useEffect } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { useFetch } from '../../../app/helpers/hooks';
import { fetchSinglePage } from '../../../app/helpers/backend';


const About = () => {
    const [about, getAbout] = useFetch(fetchSinglePage, {}, false)

    useEffect(() => {
        getAbout({
            slug: 'about_us'
        })
    }, [])

    const jsonData = JSON.parse(about?.content || '{}')

    return (
        <div className='aboutus relative py-32'>
            <div className='container mx-auto '>
                <img className='absolute left-2 top-0 -z-10' src='./dot_small.png' alt='' />
                <div className='justify-between md:flex'>
                    <div className='relative basis-1/2 pr-10 '>
                        <div className='mx-auto h-96 w-96 border-4 border-slate-600'>
                            <img
                                className='absolute -bottom-10 -left-10 -z-10'
                                src='./dot.png'
                                alt=''
                            />
                            <div className='absolute left-4 top-10 hidden lg:block'>
                                <img className='object-cover' src={jsonData?.plan_design?.plan_design_image[0]} alt='' />
                            </div>
                            <div className='left-72 top-10 z-20 lg:absolute '>
                                <img
                                    className='h-full w-full lg:h-auto lg:w-auto'
                                    src={jsonData?.plan_design?.plan_design_image[1]}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-80 basis-1/2 p-3 md:mt-0 md:p-0'>
                        <div className='relative'>
                            <img
                                className='absolute left-1/3 top-[-60px]'
                                src='./group_star.png'
                                alt=''
                            />
                            <div className=''>
                                <h1 className='header_2 pb-5 text-dark_text'>
                                    {jsonData?.plan_design?.heading}
                                </h1>
                                <div className='flex my-5 flex-col'>
                                    <div className='me-5 w-4 bg-primary'></div>
                                    <p className='paragraph_1  text-secondary_text'>
                                        {jsonData?.plan_design?.description_1}
                                    </p>
                                    <p className='paragraph_1  text-secondary_text'>
                                        {jsonData?.plan_design?.description_2}
                                    </p>
                                </div>

                                {/* <div className='pt-5'>
                                    <div className='flex items-center py-1 text-dark_text'>
                                        <span className='pr-4 text-primary'>
                                            <FiCheckSquare />
                                        </span>
                                        <p className='paragraph_9 text-dark_text'>
                                            Mordern city location & exceptional lifestyle
                                        </p>
                                    </div>
                                    <div className='flex items-center py-1 text-dark_text'>
                                        <span className='pr-4 text-primary'>
                                            <FiCheckSquare />
                                        </span>
                                        <p className='paragraph_9 text-dark_text'>
                                            Mordern city location & exceptional lifestyle
                                        </p>
                                    </div>
                                    <div className='flex items-center py-1 text-dark_text'>
                                        <span className='pr-4 text-primary'>
                                            <FiCheckSquare />
                                        </span>
                                        <p className='paragraph_9 text-dark_text'>
                                            Mordern city location & exceptional lifestyle
                                        </p>
                                    </div>
                                </div> */}
                                <button className='my-4 bg-primary px-4 py-2 text-white'>
                                    View More
                                </button>
                                <div className='absolute -bottom-10 right-52'>
                                    <img src='./drow.png' alt='drow' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
