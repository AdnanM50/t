'use client';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import FaqItem from './faqItem';

const data = [
    {
        id: 1,
        question: 'Where can I watch?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    {
        id: 2,
        question: 'Mauris id nibh eu fermentum mattis purus?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    {
        id: 3,
        question: 'Eros imperdiet rhoncus?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    {
        id: 4,
        question: 'Fames imperdiet quam fermentum?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    {
        id: 5,
        question: 'Varius vitae, convallis amet lacus sit aliquet nibh?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    {
        id: 6,
        question: 'Tortor nisl pellentesque sit quis orci dolor?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    {
        id: 7,
        question: 'Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
];

const FAQ = () => {
    return (
        <div >
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 place-items-start'>
                <div className='grid grid-cols-2 place-items-center '>
                    <div className='col-span-2 w-full md:col-span-1'>
                        <img
                            src={'/faq.png'}
                            className='h-[300px] w-full rounded-l-md object-cover md:h-[554px]'
                            alt='faq'
                        />
                    </div>
                    <div className='col-span-2 w-full md:col-span-1'>
                        <div className=' relative h-[439px] w-full rounded-r-md bg-primary'>
                            <div className='absolute -bottom-14 -right-2 z-10'>
                                <img src={'/star3.png'} alt='' />
                            </div>
                            <div className='p-7 '>
                                <p className='header_3 mt-5 uppercase text-white'>
                                    3 bedroom apartment
                                </p>
                                <p className='paragraph_1 mt-6 text-white'>
                                    This contemporary duplex offers generous accommodation
                                    includifour bedroom suites, large rece room and modern kitchen
                                    with separate dining.....
                                </p>
                                <p className='header_4_bold mt-16 text-white'>$ 800 / Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className='header_3 text-dark_text'>Frequently Asked Question</p>
                    <div className='  py-12 '>
                        {data.map((item) => (
                            <FaqItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
