"use client";
import React from 'react';
import { useFetch } from '../../../app/helpers/hooks';
import { blogListCategories } from '../../../app/helpers/backend';

const NewsCategory = ({getData}) => {
  const [category, getCategory] = useFetch(blogListCategories);

    return (
        <>
            <div className="bg-[#fafafd] p-4 mb-5 rounded-md">
                <div className='flex justify-between items-center'>
                    <span className="text-3xl pb-5">Blog Categories</span>
                    <span className="text-md pb-5 cursor-pointer hover:underline hover:text-primary"
                        onClick={() => getData({ "category": undefined })}>Clear</span>
                </div>

                <div className="text-secondary_text">

                    {
                        category?.map((item, index) => (
                            <div key={index} className="flex justify-between items-center w-full paragraph_1 py-3">
                                <p className="basis-2/6 cursor-pointer hover:underline hover:text-primary"
                                    onClick={() =>
                                        getData({ "category": item?._id })
                                    }
                                >{item.categoryName}</p>
                                <span className="basis-2/6 h-[2px] w-full bg-gray_text"></span>
                                <p>({item.count})</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default NewsCategory;