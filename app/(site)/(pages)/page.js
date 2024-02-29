"use client";
import About from '../../../components/theme2/home/about';
import Hero from '../../../components/theme2/home/hero';
import Service from '../../../components/theme2/home/service';
import React, { useEffect } from 'react';
import Places from '../../../components/theme1/home/places';
import Testimonial from '../../../components/theme2/home/testimonial';
import Blogs from '../../../components/theme2/home/blogs';
import Contact from '../../../components/theme2/home/contact';
import CompletedProject from '../../../components/theme2/home/completedProject';
import Featured from '../../../components/theme2/home/featured';
import Agents from '../../../components/theme2/home/agents';
import { useFetch } from '../../helpers/hooks';
import { fetchSinglePage } from '../../helpers/backend';
import { useTheme } from 'next-themes';

const Home = () => {
    const [home, getHome] = useFetch(fetchSinglePage, {}, false)
    const { systemTheme, theme, setTheme } = useTheme();


    useEffect(() => {
        getHome({
            slug: 'home'
        })
    }, [])

    const jsonData = JSON.parse(home?.content || '{}')

    return (
        <>
{/*           
 <div>
        <h1 className="text-7xl font-bold text-center">
          {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
          <span className="text-purple-600">Mode</span>
        </h1>
        <p className="dark:text-purple-600 my-8 text-center">
          Click the button below to switch mode
        </p>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height="50px" width="50px" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height="50px" width="50px" />
            </button>
          )}
        </div>
      </div> */}
          
            <Hero jsonData={jsonData} home4={false}></Hero>
            <About></About>
            <Service></Service>
            <Featured></Featured>
            <CompletedProject jsonData={jsonData}></CompletedProject>
            <Places theme1={false} jsonData={jsonData}></Places>
            <Agents />
            <Contact />
            <Testimonial />
            <Blogs />
          
        </>
    );
};
export default Home;