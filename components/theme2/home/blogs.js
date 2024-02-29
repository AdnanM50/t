"use client";
import Link from 'next/link';
import React from 'react';
import { useFetch } from '../../../app/helpers/hooks';
import { blogListLatest } from '../../../app/helpers/backend';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const Blogs = () => {
    const [blogs, getBlogs] = useFetch(blogListLatest, { limit: 3 })

    return (
        <section className='relative py-16'>
            <div className='absolute left-3 top-5'>
                <img width='50' src='/element3.png' alt='' />
            </div>
            <div className='absolute right-1 top-7'>
                <img width='50' src='/element.png' alt='' />
            </div>
            <div className='absolute bottom-5 left-3'>
                <img width='60' src='/element5.png' alt='' />
            </div>
            <div className='absolute bottom-3 right-3'>
                <img width='80' src='/element6.png' alt='' />
            </div>
            <div className='container mx-auto '>
                <div className=''>
                    <div className='relative'>
                        <h1 className='header_2 py-8 text-dark_text'>Latest News From Blogs</h1>
                        <img
                            className='absolute right-4 top-1 lg:left-1/2'
                            src='element4.png'
                            alt=''
                        />
                    </div>
                    <div className='flex flex-wrap items-end justify-between py-5'>
                        <div className='w-full md:w-4/6'>
                            <p className='paragraph_3 text-secondary_text'>
                                active home - building will lead to more demand the of the wit
                                warehouse space strong cospending and the rise in housing
                                construction active...
                            </p>
                        </div>
                        <Link
                            className='header_7 text-secondary_text underline hover:text-primary text-right'
                            href='#'
                        >
                            Explore All News
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 py-6 md:grid-cols-2 lg:grid-cols-3'>

                    {blogs?.docs?.map(blog => (
                        <SingleBlog key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;

const SingleBlog = ({ blog }) => {
    const { title, image, details, createdAt, _id } = blog;
    const router = useRouter();

    return (
        <div className='relative h-[450px] rounded-lg group cursor-pointer '
            onClick={() => router.push(`/news/view/${_id}`)}>
            <img className='h-full w-full rounded-lg' src={image} alt='' />
            <div className='absolute bottom-0 left-8 right-0 border-l-4 border-white group-hover:border-primary bg-white bg-opacity-90 object-cover p-5 transition-all ease-in-out'>
                <h1 className='header_4_bold text-dark_text'>
                    {title?.length > 20 ? title.slice(0, 20) + '...' : title}
                </h1>
                <p className='paragraph_3 py-3 text-secondary_text'>
                    {details?.length > 20 ? details.slice(0, 20) + '...' : details}
                </p>
                <div className='flex items-center justify-between py-4'>
                    <p className='text-xs font-bold text-secondary_text'>{dayjs(createdAt).format('MMMM DD, YYYY')}</p>
                    <Link href={`/news/view/${_id}`} className='header_7 text-dark_text underline group-hover:text-primary'>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};
