import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React from 'react';
// import Link from 'next/link';


function Banner({ title }) {
    return (
        <section className='relative z-0 -mt-[103px]  bg-secondary py-20'>
            <div className='absolute bottom-0 left-0'>
                <img width='100' src='/bl.png' alt='' />
            </div>
            <div className='absolute right-0 top-0'>
                <img width='100' src='/bread_l.png' alt='' />
            </div>
            <div className='container text-center '>
                <h1 className='headerr_1 pt-28 uppercase text-white'>{title}</h1>

                <Breadcrumb
                    className='header_5 my-2 ml-4 flex justify-center font-bold !text-white'
                    separator='>'
                    items={[
                        {
                            title: 'Home',
                            href: '/',
                            className: '!text-white hover:!text-primary',
                        },
                        {
                            title: (
                                <Link href='/news' className='!text-primary'>
                                    {title}
                                </Link>
                            ),
                        },
                    ]}
                />
            </div>
        </section>
    );
}

export default Banner;
