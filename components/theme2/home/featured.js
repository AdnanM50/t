"use client";
import React, { useState } from 'react';
import SingleProperty from '../common/propertyCard';
import { useFetch } from '../../../app/helpers/hooks';
import { propertyList } from '../../../app/helpers/backend';
import Link from 'next/link';

function Featured() {
    const [active, setActive] = useState(1);
    const [data, getData] = useFetch(propertyList, { limit: 3 });

    return (
        <section className='relative py-32 '>
            <div className='absolute left-5 top-5 opacity-80'>
                <img width='50' src='./fr.png' alt='' />
            </div>
            <div className='absolute right-5 top-5 opacity-80'>
                <img width='40' src='./fl.png' alt='' />
            </div>
            <div className='absolute bottom-5 right-5 opacity-80'>
                <img className='opacity-10' src='./br.png' alt='' />
            </div>
            <div className='container mx-auto '>
                <div className='mx-auto max-w-5xl text-center'>
                    <h1 className='header_2'>Featured Properties</h1>
                    <p className='paragraph-1 py-5 text-secondary_text'>
                        These are the latest properties in the Sales category. You can create the
                        list using the “latest listing shortcode” and show items by specific
                        categories.
                    </p>
                    <div className=''>
                        <Link href='/property'>
                            <button onClick={() => setActive(1)} className={`${active === 1 ? 'bg-primary' : 'bg-primary_lite'} px-5 py-2 text-white transition-all hover:bg-primary hover:text-white`}>
                                All Property
                            </button>
                        </Link>
                        <button onClick={() => {
                            getData({ type: "sale" })
                             setActive(2)
                        }} className={`mx-5 ${active === 2 ? 'bg-primary' : 'bg-primary_lite'} px-5 py-2 transition-all hover:bg-primary hover:text-white`}>
                            For Sale
                        </button>
                        <button onClick={() => {
                            getData({ type: "rent" })
                            setActive(3)
                        }} className={` px-5 py-2 transition-all hover:bg-primary hover:text-white ${active === 3 ? 'bg-primary' : 'bg-primary_lite'}`}>
                            For Rent
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 py-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        data?.docs?.map((item) => <SingleProperty key={item.id} item={item} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default Featured;
