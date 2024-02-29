import Banner from '../../../../../components/theme2/common/banner';
import FAQ from '../../../../../components/theme2/faq/faq';
import Agents from '../../../../../components/theme2/home/agents';
import React from 'react';

function page() {
    return (
        <>
            <Banner title={'agents'} />
            <Agents />
            <div className='container'>
                <FAQ />
            </div>
        </>
    );
}

export default page;
