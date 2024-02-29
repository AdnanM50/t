"use client";

import { Dropdown, Select, Space } from "antd";
import Link from "next/link";
import Script from "next/script";
import React, { useState, Fragment, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { useUser } from "../../app/contexts/user";
import { message } from "antd";
import { MdLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useI18n } from "../../app/providers/i18n";

const menuItems = [
  {
    name: "Home",
    href: "/",
    dropDown: false,
  },
  {
    name: "Property",
    href: "/property",
    dropDown: false,
  },
  {
    name: "Projects",
    href: "/project",
    dropDown: false,
  },
  {
    name: "Pages",
    href: "",
    dropDown: true,
  },
  {
    name: "Contact",
    href: "/contact",
    dropDown: false,
  },
];
const items = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/property/1">
        Property Details
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/project/1">
        Project Details
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" href="/otp">
        otp
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link rel="noopener noreferrer" href="/login">
        Login
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link rel="noopener noreferrer" href="/signup">
        Sign up
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link rel="noopener noreferrer" href="/agents">
        Agents
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link rel="noopener noreferrer" href="/agents/1">
        Agent Details
      </Link>
    ),
  },
  {
    key: "8",
    label: (
      <Link rel="noopener noreferrer" href="/news">
        News
      </Link>
    ),
  },
  {
    key: "9",
    label: (
      <Link rel="noopener noreferrer" href="/news/1">
        News Details
      </Link>
    ),
  },
  {
    key: "10",
    label: (
      <Link rel="noopener noreferrer" href="/about">
        About
      </Link>
    ),
  },
  {
    key: "11",
    label: (
      <Link rel="noopener noreferrer" href="/agent-profile">
        Agent Profile
      </Link>
    ),
  },
];

export function Header() {
  const i18n = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getUser, user } = useUser();
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [theme, setTheme] = useState("dark"); // Set initial theme to dark

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const defaultLang = i18n.languages?.find((lang) => lang?.default)?.name;


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
    <div className="container relative !z-10 w-full">
      {defaultLang === undefined ? (
        <></>
      ) : (
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-md bg-light_text px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img
                className=" sm:!h[50px] !h-[70px] sm:!w-[70px] md:!w-[100px]"
                src="/logo.png"
                alt=""
              />
            </span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-12 ">
              {menuItems.map((item, index) =>
                item["dropDown"] === true ? (
                  <>
                    <li key={index}>
                      <Dropdown
                        className="paragraph_9 text-dark_text transition-colors ease-in-out hover:text-primary"
                        menu={{ items }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            {item.name}
                            <FaPlus />
                          </Space>
                        </a>
                      </Dropdown>
                    </li>{" "}
                  </>
                ) : (
                  <>
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="paragraph_9 text-dark_text transition-colors ease-in-out hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  </>
                )
              )}
            </ul>
          </div>
          <div className="hidden items-center space-x-4 lg:flex">
            <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text transition-all ease-in-out hover:text-hover_color">
              <Select
                defaultValue={
                  i18n.languages?.find((lang) => lang?.default)?.name
                }
                style={{ width: 100, color: "white" }}
                bordered={false}
                onChange={(value) => {
                  i18n.changeLanguage(value);
                }}
                options={i18n.languages?.map((lang) => ({
                  value: lang?._id,
                  label: lang?.name,
                }))}
                className="text-sm font-semibold text-gray-800 hover:text-gray-900 capitalize"
              />

              {/* theme section */}
              {/* <Select
                labelInValue
                defaultValue={{
                  value: theme,
                  label: theme,
                }}
                style={{
                  width: 120,
                }}
                onChange={(value) => handleChange(value.label)}
                options={[
                  {
                    value: "light",
                    label: "light",
                  },
                  {
                    value: "dark",
                    label: "Dark",
                  },
                ]}
              /> */}
              <h1 onClick={handleToggle}>light</h1>
              <h1 onClick={handleToggle}>dark</h1>
            </div>
            {!!user?._id ? (
              <Menu>
                <Menu.Button className="inline-flex w-full justify-center items-center text-sm font-medium text-primary">
                  <div className="paragraph_1 flex cursor-pointer items-center text-dark_text transition-all ease-in-out hover:text-hover_color">
                    <FiUser className="h-6 w-6" />
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
                  <Menu.Items className="flex flex-col absolute top-20 right-0 bg-white border rounded-lg w-44 md:w-52 z-50 text-dark_text p-1">
                    <hr />
                    {user?.role === "user" ? (
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`flex items-center gap-2 px-4 py-3  text-sm md:text-lg ${active && "bg-primary text-white"} rounded-t-lg`}
                              href="/profile"
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
                            className={` flex items-center gap-2 px-4 py-3 text-sm md:text-lg ${active && "bg-primary text-white"} rounded-t-lg`}
                            href={
                              user?.role === "admin"
                                ? "/admin"
                                : user?.role === "agent"
                                  ? "/agent-profile"
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
              <>
                <Link href="/login">
                  <div className=" paragraph_9 flex cursor-pointer items-center text-dark_text transition-all ease-in-out hover:text-hover_color">
                    <FiUser className="h-6 w-6" />
                  </div>
                </Link>
              </>
            )}

            {user?.role === "agent" && (
              <div className=" paragraph_9 flex cursor-pointer items-center text-dark_text transition-all ease-in-out hover:text-hover_color">
                <Link href="/agent-profile">+Add Properties</Link>
              </div>
            )}
          </div>
          <div className="flex space-x-6 lg:hidden">
            <div className="flex items-center space-x-6">
              <div className="paragraph_1 flex cursor-pointer items-center space-x-2 text-dark_text transition-all ease-in-out hover:text-hover_color">
                <span className="text-sm font-semibold text-gray-800 hover:text-gray-900">
                  EN
                </span>
              </div>
              <div className=" paragraph_1 flex cursor-pointer items-center text-dark_text transition-all ease-in-out hover:text-hover_color">
                <FiUser className="h-6 w-6" />
              </div>
            </div>
            <FiMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-end">
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <FiX className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4 list-none">
                      {menuItems.map((item, index) =>
                        item["dropDown"] === true ? (
                          <>
                            <li className="w-full" key={index}>
                              <Dropdown
                                className="paragraph_9 text-dark_text w-full transition-colors ease-in-out hover:text-primary"
                                overlayStyle={{
                                  width: "80%",
                                  height: "100%",
                                }}
                                menu={{ items }}
                              >
                                <a onClick={(e) => e.preventDefault()}>
                                  <Space>
                                    {item.name}
                                    <FaPlus />
                                  </Space>
                                </a>
                              </Dropdown>
                            </li>
                          </>
                        ) : (
                          <>
                            <li key={index}>
                              <Link
                                href={item.href}
                                className="paragraph_9 text-dark_text transition-colors ease-in-out hover:text-primary"
                              >
                                {item.name}
                              </Link>
                            </li>
                          </>
                        )
                      )}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    +Add Properties
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
