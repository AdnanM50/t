"use client";
import Banner from '../../../../../components/theme2/common/banner';
import React from 'react';
import Sidebar from '../../../../../components/theme2/common/sidebar';
import SingleProperty from '../../../../../components/theme2/common/propertyCard';
import { propertyList } from '../../../../helpers/backend';
import { useFetch } from '../../../../helpers/hooks';
import Link from 'next/link';
import FrontPagination from '../../../../../components/theme2/common/pagination';

const Property = () => {
    const [data, getData] = useFetch(propertyList);
    console.log("🚀 ~ Property ~ data:", data)
    return (
        <>
            <Banner title='Properties' />
            <div className='py-32'>
                <div className='container'>
                    <div className='col-span-1 grid grid-cols-1 gap-4 lg:grid-cols-3'>
                        <div className='sidebar flex flex-col items-center justify-start'>
                            <Sidebar data={data} getData={getData} />
                        </div>
                        <div className='sm:col-span-2 '>
                            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2'>
                                {
                                    data?.docs?.map((item) => <SingleProperty key={item.id} item={item} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-12'>
                        <FrontPagination totalPages={data?.totalPages} page={data?.page} total={data?.totalDocs} limit={data?.limit} onPageChange={(page) => getData({ "page": page })} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Property;