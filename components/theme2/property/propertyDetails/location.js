import React from 'react';
import { FiMapPin } from 'react-icons/fi';

const Location = ({singleData}) => {
    return (
        <div className='mt-12'>
            {/* <div className='grid grid-cols-1 gap-8 md:grid-cols-2 '> */}
            <div className=''>
                <div className='flex rounded-md bg-white p-5'>
                    <div className='flex flex-col justify-start pl-4 pt-4'>
                        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary_lite '>
                            <FiMapPin className='text-[32px] text-primary ' />
                        </div>
                        <p className='header_4_bold mt-8 text-dark_text'>Address</p>
                        <p className='paragraph_1 mt-4 text-secondary_text'>
                            {/* 123 Kathal St. Tampa City, FL 33602 */}
                            {singleData?.address}
                        </p>
                    </div>
                </div>
                {/* <div className='flex rounded-md bg-white p-5'>
                    <div className='flex flex-col justify-start py-4 pl-4'>
                        <p className='paragraph_1 my-2 text-secondary_text'>
                            In vim natum soleat nostro, pri in eloquentiam contentiones. Eu sit
                            sapientem reprehendunt, omnis aliquid eu eos. No quot illum veniam est,
                            ne pro iudico saperet mnesarchum. Ea pri nostro disputando contentiones,
                            eu nec menandri qualisque, vis ex equidem invidunt. Et accusam detracto
                            splendide per, congue meliore...
                        </p>
                    </div>
                </div>
                <div className='col-span-2 '>
                    <iframe
                        className='rounded-md'
                        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14709.905199638744!2d89.55919515!3d22.821861300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1692445445094!5m2!1sen!2sbd'
                        width='100%'
                        height='474'
                        style={{ border: 0 }}
                        loading='lazy'
                    ></iframe>
                </div> */}
            </div>
        </div>
    );
};

export default Location;
