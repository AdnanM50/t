"use client"
import React, { useEffect } from 'react'
import { getAgentProperty } from '../../../app/helpers/backend';
import { useFetch } from '../../../app/helpers/hooks';
import { useSearchParams } from 'next/navigation';
import Gallery from '../property/gallery';
import Facilities from '../property/facilities';
import Details from '../property/details';
import Video from '../property/propertyDetails/video';
import Location from '../property/propertyDetails/location';
import TabDetails from '../property/propertyDetails/details';
import Plan from '../property/propertyDetails/plan';
import Review from '../property/propertyDetails/review';

const ViewProperty = ({ setActive }) => {
    const [singleData, getSingleData] = useFetch(getAgentProperty, {}, false);
    console.log("🚀 ~ ViewProperty ~ singleData:", singleData)
    const propertyId = useSearchParams().get("_id");
    console.log("🚀 ~ ViewProperty ~ propertyId:", propertyId)

    useEffect(() => {
        getSingleData({ _id: propertyId });
    }, [propertyId]);

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
        // {
        //     id: 5,
        //     label: (
        //         <p className='header_5 text-secondary_text transition-all ease-in-out hover:text-primary'>
        //             Reviews
        //         </p>
        //     ),
        //     children: <Review singleData={singleData} />,
        // },
    ];


    return (
        // <div className='space-y-6'>
        //     <div>
        //         <p className='paragraph_1 text-dark_text'>Images</p>
        //         <div className='flex items-center gap-5'>
        //             {singleData?.images?.map((img, index) => <img className='w-24 h-w-24 rounded-md' key={index} src={img} />)}
        //         </div>
        //     </div>
        //     <div>
        //         <p className='paragraph_1 text-dark_text'>Thumbnail Images:</p>
        //         <img className='w-24 h-w-24 rounded-md' src={singleData?.thumb_image} />
        //     </div>
        //     <div>
        //         <p className='paragraph_1 text-dark_text'>Title:</p>
        //         <h1 className='font-bold'>{singleData?.title}</h1>
        //     </div>
        //     <div>
        //         <p className='paragraph_1 text-dark_text'>Description:</p>
        //         <h1 className='font-bold'>{singleData?.description}</h1>
        //     </div>
        //     <div className='grid grid-cols-2 items-center'>
        //         <p className='paragraph_1 text-dark_text'>Type: <span className='font-bold'>{singleData?.type}</span></p>
        //         <p className='paragraph_1 text-dark_text'>Price: <span className='font-bold'>{singleData?.price}</span></p>
        //     </div>
        //     <div className='grid grid-cols-2 items-center'>
        //         <p className='paragraph_1 text-dark_text'>Country: <span className='font-bold'>{singleData?.country}</span></p>
        //         <p className='paragraph_1 text-dark_text'>City: <span className='font-bold'>{singleData?.city}</span></p>
        //     </div>
        //     <div className='grid grid-cols-4 items-center'>
        //         <p className='paragraph_1 text-dark_text'>Bathrooms: <span className='font-bold'>{singleData?.bathrooms}</span></p>
        //         <p className='paragraph_1 text-dark_text'>Bedrooms: <span className='font-bold'>{singleData?.bedrooms}</span></p>
        //         <p className='paragraph_1 text-dark_text'>Garage: <span className='font-bold'>{singleData?.garage}</span></p>
        //         <p className='paragraph_1 text-dark_text'>Kitchen: <span className='font-bold'>{singleData?.kitchen}</span></p>
        //     </div>
        //     <div>
        //         <p className='paragraph_1 text-dark_text'>Nearest Location:</p>
        //         {
        //             singleData?.nearest_location?.map((feature, index) => <div key={index} className='grid grid-cols-2 items-center pl-5'>
        //                 <p className='paragraph_1 text-dark_text'>Location: <span className='font-bold'>{feature?.location}</span></p>
        //                 <p className='paragraph_1 text-dark_text'>Distance: <span className='font-bold'>{feature?.distance}</span></p>

        //             </div>)
        //         }
        //     </div>
        //     <div>
        //         <p className='paragraph_1 text-dark_text'>Property Plan:</p>
        //         {
        //             singleData?.property_plan?.map((feature, index) => <div key={index} className='grid grid-cols-2 gap-5 items-center pl-5'>
        //                 <p className='paragraph_1 text-dark_text'>Mame: <span className='font-bold'>{feature?.property_name}</span></p>
        //                 <div className='flex items-start gap-6'>
        //                     <p className='paragraph_1 text-dark_text'>image:</p>
        //                     <img className='w-16 h-w-16 rounded-md' src={feature?.property_image} />
        //                 </div>

        //             </div>)
        //         }
        //     </div>
        //     <div className='grid grid-cols-2 gap-5 items-center'>
        //         <p className='paragraph_1 text-dark_text'>Video Description: <span className='font-bold'>{singleData?.video_description}</span></p>
        //         <div className='flex items-start gap-6'>
        //             <p className='paragraph_1 text-dark_text'>Video Image:</p>
        //             <img className='w-16 h-w-16 rounded-md' src={singleData?.video} />
        //         </div>
        //     </div>

        // </div>
        <div>
            <div className=''>
                <div className='container'>
                    <Gallery singleData={singleData} />
                    <Facilities singleData={singleData} />
                </div>
                <Details data={data} singleData={singleData} />
            </div>
        </div>
    )
}

export default ViewProperty