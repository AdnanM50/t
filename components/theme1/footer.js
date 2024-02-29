
import Link from "next/link"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"

const Footer = ({theme1}) => {
    return (
        <footer className={`pt-16 ${theme1 ? 'bg-neutral-800' : 'bg-white'}`} >
            <div className="container">
                <div className="flex flex-wrap space-y-4 items-center justify-between">
                    <div className=" w-full md:w-1/2 ">
                        <h3 className={`header_3 ${theme1 ? 'text-white' : 'text-dark_text'}`}>Become a Agent</h3>
                        <div className="flex items-center mt-4">
                            <div className="h-[2px] w-2/5 bg-secondary_text"></div>
                            <p className={`pl-2 header_5 ${theme1 ? 'text-violet-100' : 'text-secondary_text'}`}>Sign up Today</p>
                            <Link href="#" className="border rounded-full h-8 w-8 flex justify-center items-center ml-4 hover:bg-primary hover:text-white text-secondary_text transition-all">
                                <FiChevronRight />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <form>
                            <div className="flex lg:flex-row flex-col gap-x-2 md:justify-end">
                                <input type="text" className={`input input-bordered p-5 h-14 lg:w-[373px] w-auto focus:outline-none border border-tertiary_text focus:border-secondary_text ${theme1 ? 'bg-neutral-800' : 'bg-white'}`} placeholder='Enter your email'></input>
                                <button className='lg:w-[158px] w-full h-14 bg-hover_color text-white button_paragraph lg:mt-0 mt-2'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center py-5 mt-16 space-y-6">
                    <div className="logo order-1">
                        <img className=" xl:h-full xl:w-full md:!h[80px] md:!w-[100px] " src={`${theme1 ? '/Logo_Dark.png' : '/Logo.png'}`} alt="" />
                    </div>
                    <div className="md:flex items-center justify-between w-full md:w-fit md:space-x-6 order-last md:order-2">
                        <div className={`flex items-center paragraph_1 cursor-pointer hover:text-hover_color space-x-2 transition-all ease-in-out ${theme1 ? 'text-violet-100' : 'text-dark_text'}`}>
                            <p>Overview</p>
                        </div>
                        <div className={`flex items-center paragraph_1 space-x-2 hover:text-hover_color cursor-pointer  ${theme1 ? 'text-violet-100' : 'text-dark_text'}`}>
                            <p>Features</p>
                        </div>
                        <div className={`flex items-center paragraph_1 space-x-2 hover:text-hover_color cursor-pointer  ${theme1 ? 'text-violet-100' : 'text-dark_text'}`}>
                            <p>Pricing</p>
                        </div>
                        <div className={`flex items-center paragraph_1 space-x-2 hover:text-hover_color cursor-pointer  ${theme1 ? 'text-violet-100' : 'text-dark_text'}`}>
                            <p>Help</p>
                        </div>
                        <div className={`flex items-center paragraph_1 space-x-2 hover:text-hover_color cursor-pointer  ${theme1 ? 'text-violet-100' : 'text-dark_text'}`}>
                            <p>Privacy</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-6 order-3 md:order-2">
                        <Link href="#" className={` flex justify-center items-center ml-4  hover:text-hover_color transition-all ${theme1 ? 'text-white' : 'text-secondary_text'}`}>
                            <FaLinkedinIn className="text-2xl" />
                        </Link>
                        <Link href="#" className={` flex justify-center items-center ml-4  hover:text-hover_color transition-all ${theme1 ? 'text-white' : 'text-secondary_text'}`}>
                            <AiFillInstagram className="text-2xl" />
                        </Link>
                        <Link href="#" className={` flex justify-center items-center ml-4  hover:text-hover_color transition-all ${theme1 ? 'text-white' : 'text-secondary_text'}`}>
                            <FaFacebookF className="text-2xl" />
                        </Link>
                        <Link href="#" className={` flex justify-center items-center ml-4  hover:text-hover_color transition-all ${theme1 ? 'text-white' : 'text-secondary_text'}`}>
                            <AiOutlineTwitter className="text-2xl" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center py-5 mt-16 border-t border-tertiary_text">
                    <p className="text-gray-400">
                        Copyright ©_<span>
                            {new Date().getFullYear()}
                        </span> Homestic
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer