import Banner from '../../../../../components/theme2/common/banner';
import FAQ from '../../../../../components/theme2/faq/faq';
import React from 'react';

const Faq = () => {
    return (
        <>
            <Banner title='Faq' />
            <div className='my-20 bg-white'>
                <div className='container'>
                    <div className='mb-16'>
                        <p className='header_2 text-center text-dark_text '>
                            Frequently Asked Questions
                        </p>
                    </div>
                    <FAQ />
                </div>
            </div>
        </>
    );
};

export default Faq;
