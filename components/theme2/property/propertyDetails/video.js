import React from 'react';

const Video = ({singleData}) => {
    return (
        <div className='mt-12'>
            <p className='paragraph_1 text-secondary_text'>
                {singleData?.video_description}
            </p>

            <div className='mt-6'>
                {/* <iframe
                    className='rounded-lg'
                    width='100%'
                    height='381'
                    src='https://www.youtube.com/embed/tgbNymZ7vqY'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe> */}
                <img src={singleData?.video} />
            </div>
        </div>
    );
};

export default Video;
