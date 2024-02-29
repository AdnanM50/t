"use client";
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiCategory, BiReply } from 'react-icons/bi'
import { FaCalendar, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaCalendarDays, FaMagnifyingGlass } from 'react-icons/fa6'
import PopularNews from './popularNews'
import { FacebookShareButton, TwitterShareButton, RedditShareButton, LinkedinShareButton, TelegramShareButton, PinterestShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, RedditIcon, LinkedinIcon, TelegramIcon, PinterestIcon } from 'react-share';
import { blogComments, postCommentReply, postComments } from '../../../app/helpers/backend'
import { useAction, useFetch } from '../../../app/helpers/hooks'
import { Form } from 'antd';
import FormInput from '../../form/input';
import { FiClock } from 'react-icons/fi';

function Single_news({ data, url }) {
  const [formComment] = Form.useForm();
  const [formCommentReply] = Form.useForm();
  const [limit, setLimit] = useState(5)
  const [comments, getComments] = useFetch(blogComments, { limit }, false);
  const [loading, setLoading] = useState(false);
  const [blogCommentId, setBlogCommentId] = useState('');
  const [showId, setShowId] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!!data?._id) {
      getComments({ _id: data?._id });
    }
  }, [data?._id]);

  const handleShow = (id) => {
    setShowId(id);
    setShow(!show);
  };


  return (
    <section className="">
      <div className="container mx-auto lg:flex block py-10">
        <div className="basis-2/3 lg:pr-10 px-5">
          <div className="">
            <div className="border flex justify-between p-4 text-secondary_text paragraph_1 mt-10 lg:mt-0">
              <div className="flex justify-between items-center">
                <BiCategory />
                <p className="ps-2 capitalize">{data?.category?.name}</p>
              </div>
              <div className="flex justify-center items-center">
                <FaCalendar />
                <p className="ps-2 ">{dayjs(data?.createdAt).format('MMMM, DD YYYY')}</p>
              </div>
            </div>
            <div className="w-full py-5">
              <img className="w-full object-contain rounded-md h-[400px]" src={data?.image} alt="" />
            </div>
            <div className="">
              <h1 className="header_8 text-dark_text py-2">{data?.title}</h1>
              <p className="py-5 paragraph_1 text-secondary_text">
                {data?.details}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h1 className='paragraph_1'>Tags:</h1>
                <div className="ps-5">
                  <span className="font-semibold px-3 header_7">{
                    data?.tags?.map((item) => (
                      <span className='whitespace-pre' key={item?._id}>#{item?.name} </span>
                    ))
                  }</span>
                </div>
              </div>

            </div>

            <div className="py-6">
              <h1 className="header_4_bold text-dark_text py-5">
                {comments?.totalDocs} Comments</h1>
              <div className="">
                {comments?.docs?.map((item) => (
                  <div key={item?._id} className="border rounded-md p-5 my-2">
                    <div className="flex gap-2 md:gap-4 py-2">
                      <div className="">
                        <div className="md:h-[70px] md:w-[70px] h-10 w-10">
                          <img
                            className="h-full w-full rounded-full"
                            src={item?.user?.image}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <h1 className="header_4">
                            {item?.user?.name}
                          </h1>
                          <div className="flex text-secondary_text items-center">
                            <FiClock />
                            <span className="m-2">
                              {dayjs(item?.createdAt).format(" MMM. DD, YYYY")}
                            </span>
                          </div>
                        </div>
                        <p className="paragraph_1 text-secondary_text py-2">
                          {item?.content}
                        </p>
                        <div
                          onClick={() => {
                            handleShow(item?._id), setBlogCommentId(item?._id);
                          }}
                          className="cursor-pointer"
                        >
                          <div className="text-secondary_text flex items-center my-1">
                            <BiReply className="text-2xl" />{" "}
                            <p className="ms-2 text-secondary_text">Reply</p>
                          </div>
                        </div>
                        <div
                          className={`${showId === item?._id
                            ? show
                              ? "block mb-5"
                              : "hidden"
                            : "hidden"
                            }`}
                        >
                          <div className="grid grid-cols-12 items-start gap-3 pt-3 w-full">
                            <div className="md:h-[100px] h-12 col-span-1">
                              <img
                                src={item?.user?.image}
                                width={70}
                                height={70}
                                alt="images"
                                className="rounded-full w-10 h-10"
                              />
                            </div>
                            <div className="col-span-11">
                              <Form
                                layout='vertical'
                                form={formCommentReply}
                                onFinish={async (values) => {
                                  setLoading(true);
                                  (values.blog = data?._id),
                                    (values.parent_comment = blogCommentId),
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    await useAction(
                                      postCommentReply,
                                      values,
                                      () => {
                                        formCommentReply.resetFields();
                                        setShow(false);
                                        getComments();
                                        setLoading(false);
                                      }
                                    );
                                }}
                              >
                                <div className=" w-full ">
                                  <FormInput label={"Comment"} placeholder={"Write a comment"} name={"content"} textArea required />
                                  <div className="flex justify-end gap-3 p-3">
                                    <span
                                      onClick={() => handleShow(item?._id)}
                                      className="bg-primary paragraph_1 text-white px-5 py-2 my-2 rounded-md cursor-pointer"
                                    >
                                      Cancel
                                    </span>
                                    <button disabled={loading} className="bg-primary paragraph_1 text-white px-5 py-2 my-2 rounded-md">Submit</button>
                                  </div>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                        {item?.replies?.map((reply) => (
                          <div key={reply?._id} className="flex py-2">
                            <div className="">
                              <div className="md:h-[50px] md:w-[50px] h-10 w-10 mr-4">
                                <img
                                  className="h-full w-full rounded-full"
                                  src={
                                    reply?.user?.image
                                  }
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex items-center justify-between ">
                                <h1 className="text-lg">
                                  {reply?.user?.name}
                                </h1>
                                <div className="flex items-center text-secondary_text">
                                  <FiClock />
                                  <span className="m-2">
                                    {dayjs(item?.createdAt).format(
                                      " MMM. DD, YYYY"
                                    )}
                                  </span>
                                </div>
                              </div>
                              <p className="paragraph_1 text-secondary_text py-1">
                                {reply?.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>


                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="shadow-lg p-5">
              <h1 className="header_4_bold text-dark_text pb-5">Submit New Comments</h1>
              <Form
                layout='vertical'
                form={formComment}
                onFinish={async (values) => {
                  setLoading(true);
                  (values.blog = data?._id),
                    await useAction(postComments, values, () => {
                      formComment.resetFields();
                      getComments();
                      setLoading(false);
                    });
                }}
              >
                <FormInput label={"Comment"} placeholder={"Write a comment"} name={"content"} textArea required />
                <button disabled={loading} className="bg-primary paragraph_1 text-white px-5 py-2 my-5 rounded-md">Submit</button>

              </Form>

            </div>

          </div>

          <div className='my-8'>
            <div className="flex items-center justify-center mt-8">
              {
                comments?.hasNextPage &&
                <button className="!border !border-primary !text-primary hover:bg-primary hover:!text-white px-2 rounded-md" onClick={() => {
                  getComments({ limit: limit + 5 })
                  setLimit(limit + 5)
                }}>Load More</button>
              }

            </div>
          </div>
        </div>
        <div className="basis-1/3 lg:mt-0 mt-5">

          <PopularNews />


          <div className="bg-[#fafafd] p-4 mb-5 rounded-md">
            <h1 className="header_4">Share News</h1>

            <div className="flex gap-4 py-4">
              <FacebookShareButton url={url}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <RedditShareButton url={url}>
                <RedditIcon size={32} round />
              </RedditShareButton>
              <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TelegramShareButton url={url}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
              <PinterestShareButton url={url}>
                <PinterestIcon size={32} round />
              </PinterestShareButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Single_news