import { Rate } from 'antd';
import React from 'react';
import { FiStar } from 'react-icons/fi';

const Testimonial = ({ theme1 }) => {
    return (
        <section className='py-10'>
            <div className=' container mx-auto md:flex items-center flex-wrap  py-10'>





                <div className='relative md:basis-3/5 pr-14'>
                    <h1 className={`header_2 ${theme1 ? 'text-dark_text dark:text-white' : 'text-dark_text'}`}>
                        What our happy clients says about Us
                    </h1>
                    <p
                        className={`header_4_italic py-8 ${theme1 ? 'text-secondary_text dark:text-violet-100' : 'text-secondary_text'}`}
                    >
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                    </p>
                    <p className={`header_5 ${theme1 ? 'text-dark_text dark:text-violet-100' : 'text-dark_text'}`}>
                        Jenny Wilson - Client
                    </p>
                    <div className='flex py-4 '>
                        <Rate
                            character={<FiStar />}
                            className='!text-hover_color '
                            disabled
                            defaultValue={2}
                        />
                    </div>
                    <div className=''>
                        <img src='./img/Arrow.png' alt='' />
                    </div>
                </div>




                <div className='relative md:basis-2/5'>
                    <img
                        src='/man.png'
                        className='h-[460px] w-[460px] object-cover '
                        alt=''
                    />
                    <div className='absolute -left-14 top-7 hidden h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg lg:flex'>
                        <img src='../../../public/quote-down.png' alt='quote' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
