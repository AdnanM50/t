import Agents from '../../../../components/theme1/home/agents';
import Blogs from '../../../..//components/theme1/home/blogs';
import Featured from '../../../../components/theme1/home/featured/featured';
import FindProperty from '../../../../components/theme1/home/findProperty';
import Hero from '../../../../components/theme1/home/hero';
import HowItWorks from '../../../../components/theme1/home/howItWorks';
import Places from '../../../../components/theme1/home/places';
import Testimonial from '../../../../components/theme1/home/testimonial';
import WhoWeAre from '../../../../components/theme1/home/whoWeAre';

const Home = () => {
    return (
        <main className='dark:bg-neutral-800 bg-white'>
            <Hero theme1={true} />
            <Places theme1={true} />
            <WhoWeAre theme1={true} />
            <HowItWorks theme1={true} />
            <Featured theme1={true} />
            {/* <FindProperty theme1={true} />  This component is having issues */}
            <Testimonial theme1={true} />
            <Agents />
            <Blogs theme1={true} />
        </main>
    );
};

export default Home;
