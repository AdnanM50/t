"use client";
import React from 'react';
import SingleService from '../common/serviceCard';
import { useFetch } from '../../../app/helpers/hooks';
import { getServiceList } from '../../../app/helpers/backend';



const Service = () => {
    const [services, getServices] = useFetch(getServiceList, { limit: 6 })

    return (
        <section className='relative bg-secondary py-16'>
            <div className='absolute left-5 top-5'>
                <img src='./elament2.png' alt='' />
            </div>
            <div className='absolute right-9 top-5'>
                <img className='hidden md:block' src='./ret.png' alt='' />
            </div>
            <div className='absolute bottom-2 left-5'>
                <img src='./element (1).png' alt='' />
            </div>
            <div className='absolute bottom-5 right-5'>
                <img width='72' src='./element_big2.png' alt='' />
            </div>
            <div className='container mx-auto '>
                <div className='py-8'>
                    <h1 className='text-center text-5xl text-white'>
                        We provide the best service for you
                    </h1>
                </div>
                <div className='grid grid-cols-1 gap-5 pb-10 md:grid-cols-2 lg:grid-cols-3'>
                    {services?.docs?.map((item, index) => (
                        <SingleService key={index} item={item} />
                    ))}
                    
                </div>
                <div className='text-center text-white'>
                    <a className='underline' href=''>
                        View More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Service;


