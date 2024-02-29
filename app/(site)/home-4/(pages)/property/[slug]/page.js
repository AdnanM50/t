import Banner from '../../../../../../components/theme2/common/banner';
import Details from '../../../../../../components/theme2/property/details';
import Facilities from '../../../../../../components/theme2/property/facilities';
import Gallery from '../../../../../../components/theme2/property/gallery';
import TabDetails from '../../../../../../components/theme2/property/propertyDetails/details';
import Location from '../../../../../../components/theme2/property/propertyDetails/location';
import Plan from '../../../../../../components/theme2/property/propertyDetails/plan';
import Review from '../../../../../../components/theme2/property/propertyDetails/review';
import Video from '../../../../../../components/theme2/property/propertyDetails/video';
import React from 'react';

const data = [
    {
        id: 1,
        label: (
            <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                Property Details
            </p>
        ),
        children: <TabDetails />,
    },
    {
        id: 2,
        label: (
            <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                Property Plan
            </p>
        ),
        children: <Plan />,
    },
    {
        id: 3,
        label: (
            <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                Video
            </p>
        ),
        children: <Video />,
    },
    {
        id: 4,
        label: (
            <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                Location
            </p>
        ),
        children: <Location />,
    },
    {
        id: 5,
        label: (
            <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                Reviews
            </p>
        ),
        children: <Review />,
    },
];

const PropertyDetails = () => {
    return (
        <>
            <Banner title='Property Details' />
            <div className='py-32'>
                <div className='container'>
                    <Gallery />
                    <Facilities />
                </div>
                <Details data={data} />
            </div>
        </>
    );
};

export default PropertyDetails;
