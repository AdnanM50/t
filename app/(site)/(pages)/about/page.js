"use client";
import Timeline from '../../../../../components/theme2/about/timeline';
import React, { useEffect } from 'react';
import Breadcrumb from '../../../../../components/theme2/common/banner';
import About from '../../../../../components/theme2/home/about';
import Service from '../../../../../components/theme2/home/service';
import Agents from '../../../../../components/theme2/home/agents';
import Testimonial from '../../../../../components/theme2/home/testimonial';
import Blogs from '../../../../../components/theme2/home/blogs';
import { fetchSinglePage } from '../../../../helpers/backend';
import { useFetch } from '../../../../helpers/hooks';


const AboutUs = () => {

    const [about, getAbout] = useFetch(fetchSinglePage, {}, false)

    useEffect(() => {
        getAbout({
            slug: 'about_us'
        })
    }, [])

    const jsonData = JSON.parse(about?.content || '{}')
    
    return (
        <>
            <Breadcrumb title='About Us'></Breadcrumb>
            <About />
            <Timeline jsonData={jsonData} />
            <Service />
            <Agents />
            <Testimonial />
            <Blogs />
        </>
    );
};

export default AboutUs;
