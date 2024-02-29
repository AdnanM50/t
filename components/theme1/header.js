"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { FiPhoneCall, FiHome, FiUser, FiX, FiMail } from "react-icons/fi";
import { PiEqualsLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { useUser } from "../../app/contexts/user";
import { message } from "antd";
import { MdLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { useRouter } from "next/navigation";
// import { IoSunnySharp } from "react-icons/io5";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";

const Header = ({ theme1, theme3 }) => {
  const [show, setShow] = useState(false);
  const { getUser, user } = useUser();
  const router = useRouter();

  const handleShow = () => {
    setShow(true);
  };
  const [theme, setTheme] = useState("dark"); // Set initial theme to dark

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <header
      className={`relative ${theme1 ? "bg-neutral-800" : theme3 ? "bg-secondary" : "bg-white"}`}
    >
      <div className="flex items-center justify-between">
        <div className="container">
          <div className="flex items-center justify-between py-5">
            <div className="logo">
              <img
                className=" md:!h[80px] md:!w-[100px] xl:h-full xl:w-full "
                src={`${theme1 || theme3 ? "/Logo_Dark.png" : "/Logo.png"}`}
                alt=""
              />
            </div>
            <div className="hidden items-center space-x-6 md:flex ">
              <div
                className={`paragraph_1 flex cursor-pointer items-center space-x-2 ${theme1 || theme3 ? "text-white" : "text-dark_text"} transition-all ease-in-out hover:text-hover_color`}
              >
                <FiPhoneCall />
                <p>+88012344 4334</p>



                {/* <h1 onClick={handleToggle}>light</h1>
              <h1 onClick={handleToggle}>dark</h1> */}
              <div>
             
                
              </div>



              </div>
              <div
                className={`paragraph_1 flex cursor-pointer items-center space-x-2 ${theme1 || theme3 ? "text-white" : "text-dark_text"} hover:text-hover_color `}
              >
                <FiHome />
                <p>Add Property</p>

               
               
              </div>
              {
                  theme === "light" ? <h1 className="mx-10" onClick={handleToggle}> <BiSun size={36} color="orange"/></h1> : <h1 className="mx-10" onClick={handleToggle}><BiMoon size={36} color="white"/></h1>
                  
                }
            </div>
            {!!user?._id ? (
              <Menu>
                <Menu.Button className="inline-flex w-full justify-center items-center text-sm font-medium text-primary">
                  <div
                    className={` paragraph_1 flex cursor-pointer items-center ${theme1 || theme3 ? "text-white" : "text-dark_text"} transition-all ease-in-out hover:text-hover_color`}
                  >
                    <FiUser />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="flex flex-col absolute top-16 right-0 bg-white border rounded-lg w-44 md:w-52 z-50 text-dark_text p-1">
                    <hr />
                    {user?.role === "user" ? (
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={` flex items-center gap-2 px-4 py-3  text-sm md:text-lg ${active && "bg-primary text-white"} rounded-t-lg`}
                              href="/user/profile"
                            >
                              {" "}
                              <FiUser />
                              <p>Profile</p>
                            </Link>
                          )}
                        </Menu.Item>
                      </>
                    ) : (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={` flex items-center gap-2 px-4 py-3  text-sm md:text-lg ${active && "bg-primary text-white"} rounded-t-lg`}
                            href={
                              user?.role === "admin"
                                ? "/admin"
                                : user?.role === "agent"
                                  ? "/agent"
                                  : "/"
                            }
                          >
                            <MdOutlineSpaceDashboard />
                            <p>Dashboard</p>
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`cursor-pointer flex items-center gap-2 px-4 py-3  text-sm md:text-lg ${active && "bg-primary text-white"} rounded-b-lg`}
                          onClick={() => {
                            localStorage.removeItem("token");
                            message.success("Logged out successfully");
                            router.push("/");
                            getUser();
                          }}
                        >
                          <MdLogout />
                          <p>Logout</p>
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          onClick={handleShow}
          className={`!mr-6 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-2 ${theme1 || theme3 ? "border-white" : "border-dark_text"} md:h-[80px]  md:w-[80px]`}
        >
          <PiEqualsLight className="text-hover_color" />
        </div>
      </div>

      {show && (
        <div className="absolute right-0 top-0 z-20 h-[100vh] w-full bg-white p-8 shadow-xl md:w-[524px]">
          <div className="flex justify-end">
            <div
              onClick={() => setShow(false)}
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border-2 border-dark_text"
            >
              <FiX className="text-hover_color" />
            </div>
          </div>
          <div className="flex !h-full flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text transition-all ease-in-out hover:text-hover_color">
                <p>Home</p>
              </div>
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text hover:text-hover_color ">
                <p>About</p>
              </div>
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text hover:text-hover_color ">
                <p>Projects</p>
              </div>
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text hover:text-hover_color ">
                <p>Properties</p>
              </div>
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text hover:text-hover_color ">
                <p>Pages</p>
              </div>
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text hover:text-hover_color ">
                <p>Contact</p>
              </div>
            </div>
            <div className="mb-10">
              <div className="paragraph_1 mb-4 flex cursor-pointer items-center space-x-2 text-secondary_text transition-all ease-in-out hover:text-hover_color">
                <FiPhoneCall />
                <p>+88012344 4334</p>
              </div>
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-secondary_text transition-all ease-in-out hover:text-hover_color">
                <FiMail />
                <p>test@gmail.com</p>
              </div>
              <div className="mt-6 flex items-center">
                <p className="header_5 pr-2 text-dark_text">Follow Us:</p>
                <div className="h-[2px] w-2/5 bg-secondary_text"></div>
                <Link
                  href="#"
                  className=" ml-4 flex items-center justify-center  text-secondary_text  transition-all hover:text-primary"
                >
                  <FaLinkedinIn className="text-2xl" />
                </Link>
                <Link
                  href="#"
                  className=" ml-4 flex items-center justify-center  text-secondary_text  transition-all hover:text-primary"
                >
                  <AiFillInstagram className="text-2xl" />
                </Link>
                <Link
                  href="#"
                  className=" ml-4 flex items-center justify-center  text-secondary_text  transition-all hover:text-primary"
                >
                  <FaFacebookF className="text-2xl" />
                </Link>
                <Link
                  href="#"
                  className=" ml-4 flex items-center justify-center  text-secondary_text  transition-all hover:text-primary"
                >
                  <AiOutlineTwitter className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
