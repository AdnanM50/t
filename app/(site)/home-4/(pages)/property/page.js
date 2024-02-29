import Banner from '../../../../../components/theme2/common/banner';
import React from 'react';
import Sidebar from '../../../../../components/theme2/common/sidebar';
import SingleProperty from '../../../../../components/theme2/common/propertyCard';

const Property = () => {
    return (
        <>
            <Banner title='Properties' />
            <div className='py-32'>
                <div className='container'>
                    <div className='col-span-1 grid grid-cols-1 gap-4 lg:grid-cols-3'>
                        <div className='sidebar flex flex-col items-center justify-center'>
                            <Sidebar />
                        </div>
                        <div className='sm:col-span-2 '>
                            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2'>
                                <SingleProperty />
                                <SingleProperty />
                                <SingleProperty />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Property;
