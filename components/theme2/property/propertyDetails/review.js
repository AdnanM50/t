'use client';
import { Avatar, Form, Rate, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAction, useFetch } from '../../../../app/helpers/hooks';
import { getPropertyReview, propertyReview } from '../../../../app/helpers/backend';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const data = [
    {
        id: 1,
        rating: 4,
        name: 'John Doe',
        image: '/avatar.png',
        date: 'February 3,2023',
        review: 'Vidisse oportere suscipiantur ut ius, at ius magna postea. Te essent maiestatis mnesarchum mel, error numquam meliore cu usu, in quo persius aliquid omittam.',
    },
    {
        id: 2,
        rating: 4,
        name: 'John Doe',
        image: '/avatar2.png',
        date: 'August 3,2023',
        review: 'Vidisse oportere suscipiantur ut ius, at ius magna postea. Te essent maiestatis mnesarchum mel, error numquam meliore cu usu, in quo persius aliquid omittam.',
    },
    {
        id: 3,
        rating: 2,
        name: 'John Doe',
        image: '/avatar.png',
        date: 'February 3,2023',
        review: 'Vidisse oportere suscipiantur ut ius, at ius magna postea. Te essent maiestatis mnesarchum mel, error numquam meliore cu usu, in quo persius aliquid omittam.',
    },
];

const Review = ({singleData}) => {
    const [review, getReview] = useFetch(getPropertyReview);
    console.log("🚀 ~ Review ~ review:", review)

    useEffect(() => {
        getReview({
            _id: singleData?._id
        })
    }, [])

    return (
        <div className='mt-12'>
            <div className='rounded-md bg-white p-5 pb-0'>
                <p className='header_7 text-dark_text '>
                    {(review?.docs?.reduce((a, b) => a + b?.rating, 0) / review?.docs?.length).toFixed(1)}(
                    { review?.docs?.length} Reviews)
                </p>
                { review?.docs?.map((item) => (
                    <ReviewItem item={item} key={item.id} />
                ))}
            </div>

            <div className='mt-12 rounded-md bg-white p-5 '>
                <p className='text-dark_text'>
                    <span className='header_7'>Add a Review</span>
                </p>
                <div className='mt-6'>
                    <AddReviewForm singleData={singleData} getReview={getReview} />
                </div>
            </div>
        </div>
    );
};

export default Review;

const ReviewItem = ({ item }) => {
    return (
        <div className=''>
            <div className='flex flex-wrap items-center justify-between py-6'>
                <div className='flex items-center'>
                    <Avatar size={64} src={item?.user?.image} />
                    <div className='ml-4'>
                        <p className='paragraph_9 text-dark_text'>{item?.user?.name}</p>
                        <p className='paragraph_6 text-secondary_text'>{dayjs(item?.createdAt).format('MMMM DD, YYYY')}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Rate
                        disabled
                        defaultValue={item?.rating}
                        className='text-primary'
                        style={{ fontSize: 20 }}
                    />
                </div>
            </div>
            <div className=' pb-6'>
                <p className='paragraph_1 text-secondary_text'>{item?.review}</p>
            </div>
            {item.id !== data?.length && <div className='border-b border-secondary_text'></div>}
        </div>
    );
};

const AddReviewForm = ({ singleData, getReview }) => {
    const router = useRouter();
    const [rating, setRating] = useState(0);

    return (
        <Form onFinish={async (values) => {
            if (rating) {

            return useAction(propertyReview, {
                ...values,
                property: singleData?._id,
                rating
            }, () => {
                getReview()
            })
        } else {
            message.error('Please give a rating')
        } 

        }}>
            <Form.Item name='rating'>
                <label className='paragraph_1 text-secondary_text '> Rating: </label>
                <Rate onChange={(e) => setRating(e)} className='text-primary' style={{ fontSize: 18 }} />
            </Form.Item>
            {/* <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Form.Item>
                    <input
                        className='w-full rounded-md border border-secondary_text p-4 outline-none'
                        placeholder='Name'
                    />
                </Form.Item>
                <Form.Item>
                    <input
                        className='w-full rounded-md border border-secondary_text p-4 outline-none'
                        placeholder='Email'
                    />
                </Form.Item>
            </div> */}
            <Form.Item name='review'>
                <textarea
                    required
                    className='w-full rounded-md border border-secondary_text p-4 outline-none'
                    placeholder='Write your review here'
                    rows={4}
                ></textarea>
            </Form.Item>
            <Form.Item>
                <button className='header_7 rounded-md bg-primary px-4 py-2 text-white transition-all ease-in-out hover:rounded-md hover:bg-hover_color '>
                    Submit Review{' '}
                </button>
            </Form.Item>
        </Form>
    );
};
