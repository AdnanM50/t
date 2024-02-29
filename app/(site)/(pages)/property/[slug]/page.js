"use client";
import Banner from '../../../../../../components/theme2/common/banner';
import Details from '../../../../../../components/theme2/property/details';
import Facilities from '../../../../../../components/theme2/property/facilities';
import Gallery from '../../../../../../components/theme2/property/gallery';
import TabDetails from '../../../../../../components/theme2/property/propertyDetails/details';
import Location from '../../../../../../components/theme2/property/propertyDetails/location';
import Plan from '../../../../../../components/theme2/property/propertyDetails/plan';
import Review from '../../../../../../components/theme2/property/propertyDetails/review';
import Video from '../../../../../../components/theme2/property/propertyDetails/video';
import React, { useEffect } from 'react';
import { useFetch } from '../../../../../helpers/hooks';
import { publicProperty } from '../../../../../helpers/backend';


const PropertyDetails = ({params}) => {
    const [singleData, getSingleData] = useFetch(publicProperty);
    
    const data = [
        {
            id: 1,
            label: (
                <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                    Property Details
                </p>
            ),
            children: <TabDetails singleData={singleData} />,
        },
        {
            id: 2,
            label: (
                <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                    Property Plan
                </p>
            ),
            children: <Plan singleData={singleData} />,
        },
        {
            id: 3,
            label: (
                <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                    Video
                </p>
            ),
            children: <Video singleData={singleData} />,
        },
        {
            id: 4,
            label: (
                <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                    Location
                </p>
            ),
            children: <Location singleData={singleData} />,
        },
        {
            id: 5,
            label: (
                <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
                    Reviews
                </p>
            ),
            children: <Review singleData={singleData} />,
        },
    ];

    useEffect(() => {
        getSingleData({
            _id: params?.slug
        })
    }, [params.slug]);

    return (
        <>
            <Banner title='Property Details' />
            <div className='py-32'>
                <div className='container'>
                    <Gallery singleData={singleData} />
                    <Facilities singleData={singleData} />
                </div>
                <Details singleData={singleData} data={data} />
            </div>
        </>
    );
};

export default PropertyDetails;