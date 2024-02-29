"use client";
import React from "react";
import Slider from "react-slick";
import { FiFacebook } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 810,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const team_members = [
  {
    _id: 1,
    name: "John Doe",
    position: "CEO",
    image: "/about/m1.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
  },

  {
    _id: 2,
    name: "John Doe",
    position: "CEO",
    image: "/about/m2.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
  },

  {
    _id: 3,
    name: "John Doe",
    position: "CEO",
    image: "/about/m2.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
  },

  {
    _id: 4,
    name: "John Doe",
    position: "CEO",
    image: "/about/m1.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
  },

  {
    _id: 5,
    name: "John Doe",
    position: "CEO",
    image: "/about/m2.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
  },
];

const Agents = () => {
  const theme = "main";
  return (
    <div className="py-28">
      <div className="flex flex-col items-center justify-center pt-12">
        {/* <h1 className={`text-${theme}-secondary paragraph_2 text-center`}>Our Team</h1> */}
        <div className="header_2 text-white py-4 text-center">Meet With Team</div>
        <div className="container w-full flex items-center flex-wrap space-x-9 space-y-9">
          {/* <Slider {...settings} > */}
          {team_members?.map((member) => {
            return <Team member={member} key={member._id} />;
          })}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};
const Team = ({ member }) => {
  return (
    <>
      {/* <div className='our_team group'>
                <div className='pb-12 pt-12'>
                    <div className='z-0 flex justify-center'>
                        <img
                            src={member?.image}
                            alt='member'
                            className='img hover:rounded-md group-hover:scale-y-125'
                        />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent'></div>
                    <div className='members group-hover:translate-y-20'>
                        <div className='icon opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <Link href={member?.facebook} className='link'>
                                <FiFacebook />
                            </Link>
                            <Link href={member?.instagram} className='link'>
                                <FaInstagram />
                            </Link>
                            <Link href={member?.twitter} className='link'>
                                <FaTwitter />
                            </Link>
                            <Link href={member?.whatsapp} className='link'>
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}

      <div>
        <div className="group relative  lg:w-[270px] w-auto rounded-full transition-all hover:h-[400px] md:h-[400px] lg:h-[270px]">
          <div className="h-[270px] lg:w-[270px] w-full">
            <img
              className="h-[270px] lg:w-[270px] mx-auto rounded-full transition-all group-hover:h-[400px] group-hover:rounded-[100px]"
              src={member?.image}
              alt="man"
            />
          </div>
          <div className="opacity-0 group-hover:opacity-100">
            <h1 className=" header_5 absolute left-1/2 top-8 -translate-x-1/2 transform text-white">
              {member?.name}
            </h1>
            <div className="absolute bottom-5 w-full text-white md:px-20 lg:px-10 px-28">
              <h1
                className="pb-5 text-center cursor-pointer hover:underline header_5"
             
              >
                {member?.name}
              </h1>
              <div className=" mb-8 flex justify-around md:mb-0">
                <span
                  className="header_5 cursor-pointer rounded-full border p-3 hover:bg-white hover:text-primary"
                  onClick={() => window.open(`${member?.facebook}`, "_blank")}
                >
                  <FaFacebookF></FaFacebookF>
                </span>
                <span
                  className="header_5 cursor-pointer rounded-full border p-3 hover:bg-white hover:text-primary"
                  onClick={() => window.open(`${member?.twitter}`, "_blank")}
                >
                  <FaTwitter></FaTwitter>
                </span>
                <span
                  className="header_5 cursor-pointer rounded-full border p-3 hover:bg-white hover:text-primary"
                  onClick={() => window.open(`${member?.instagram}`, "_blank")}
                >
                  <FaInstagram></FaInstagram>
                </span>
                <span
                  className="header_5 cursor-pointer rounded-full border p-3 hover:bg-white hover:text-primary"
                 
                >
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Agents;
