import Banner from '../../../../../components/theme2/common/banner';
import React from 'react';
import { FiCheck } from 'react-icons/fi';

const data = [
    {
        id: 1,
        plan: 'Basic',
        price: '$0',
        title: 'Free',
        image: '/price1.png',
        list: [
            'Full Access to the Library',
            'Full Access to the Library',
            'Full Access to the Library',
            'Full Access to the Library',
        ],
    },
    {
        id: 2,
        plan: 'Standard',
        price: '$30',
        title: '$3o',
        image: '/price2.png',
        list: [
            'Full Access to the Library',
            'Full Access to the Library',
            'Full Access to the Library',
            'Full Access to the Library',
        ],
    },
    {
        id: 3,
        plan: 'Premium',
        price: '$100',
        title: '$100',
        image: '/price1.png',
        list: [
            'Full Access to the Library',
            'Full Access to the Library',
            'Full Access to the Library',
            'Full Access to the Library',
        ],
    },
];

const Pricing = () => {
    return (
        <>
            <Banner title='Pricing Plan' />
            <section className='relative py-20'>
                <div className='absolute left-5 top-5'>
                    <img width='50' src='/llt.png' alt='' />
                </div>
                <div className='absolute right-3 top-5'>
                    <img width='50' src='/blt.png' alt='' />
                </div>
                <div className='absolute bottom-3 right-5'>
                    <img src='/drow.png' alt='' />
                </div>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-10 '>
                        {data.map((item) => (
                            <div
                                className='relative rounded-lg bg-white p-5 shadow-sm transition-all ease-in-out hover:shadow-xl'
                                key={item.id}
                            >
                                <div className='absolute -top-5 right-7 z-10'>
                                    <div className='relative'>
                                        <img src={item.image} alt='' />
                                        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform '>
                                            <p className='header_5 ml-5 text-center text-white'>
                                                {item.price} <span className='small'>/month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='!mt-4 flex h-[53px] w-[53px] items-center justify-center rounded-full  bg-[#F3F4F8]'>
                                    <img src={'/coin.png'} alt='' />
                                </div>
                                <p className='header_3 paragraph_3 mt-12 !font-bold text-secondary_text'>
                                    {item.plan}
                                </p>
                                <p className='header_2 mt-2 text-dark_text'>{item.title}</p>

                                <ul>
                                    {item.list.map((item, index) => (
                                        <li className='mt-5 flex items-center' key={index}>
                                            <FiCheck className='text-lg text-primary' />
                                            <p className='paragraph_1 ml-3 text-secondary_text'>
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className=' mx-auto w-4/5'>
                                    <button className='header_5 mt-10 w-full rounded-lg border border-secondary_text bg-white py-3 text-secondary_text transition-all ease-in-out hover:bg-primary hover:text-white '>
                                        Choose This Plan
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
