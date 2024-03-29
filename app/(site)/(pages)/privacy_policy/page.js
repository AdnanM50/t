"use client";
import React, { useEffect } from 'react';
import Breadcrumb from '../../../../../components/theme2/common/banner';
import { useFetch } from '../../../../helpers/hooks';
import { fetchSinglePage } from '../../../../helpers/backend';
import { Skeleton } from 'antd';


const PrivacyPolicy = () => {
    const [data, getData, { loading }] = useFetch(fetchSinglePage, {}, false)

    useEffect(() => {
        getData({
            slug: 'privacy_policy'
        })
    }, [])

    return (
        <div>
            <Breadcrumb title='Privacy Policy'></Breadcrumb>
            {
                loading ? <Skeleton active /> :
                    <div className='container mx-auto'>
                        <div className='paragraph_1 text-dark_text md:mt-10'>
                            <div
                                className='paragraph_1 text-dark_text md:py-8 py-4'
                                dangerouslySetInnerHTML={{ __html: data?.content }}
                                style={{ whiteSpace: 'pre-line' }}
                            />
                        </div>
                    </div>
            }

        </div>
    );
};

export default PrivacyPolicy;