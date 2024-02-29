import Timeline from '../../../../../components/theme2/about/timeline';
import React from 'react';
import Breadcrumb from '../../../../../components/theme2/common/banner';
import About from '../../../../../components/theme2/home/about';
import Service from '../../../../../components/theme2/home/service';
import Agents from '../../../../../components/theme2/home/agents';
import Testimonial from '../../../../../components/theme2/home/testimonial';
import Blogs from '../../../../../components/theme2/home/blogs';
const AboutUs = () => {
    return (
        <>
            <Breadcrumb title='About Us'></Breadcrumb>
            <About></About>
            <Timeline />
            <Service />
            <Agents />
            <Testimonial />
            <Blogs />
        </>
    );
};

export default AboutUs;
