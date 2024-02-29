import Agents from '../../../../components/theme1/home/agents';
import Blogs from '../../../../components/theme1/home/blogs';
import Featured from '../../../../components/theme1/home/featured/featured';
import FindProperty from '../../../../components/theme1/home/findProperty';
import Hero from '../../../../components/theme1/home/hero';
import HowItWorks from '../../../../components/theme1/home/howItWorks';
import Places from '../../../../components/theme1/home/places';
import Testimonial from '../../../../components/theme1/home/testimonial';
import WhoWeAre from '../../../../components/theme1/home/whoWeAre';

const Home = () => {
    return (
        <>
            <Hero theme1={false} />
            <Places theme1={false} />
            <WhoWeAre theme1={false} />
            <HowItWorks theme1={false} />
            <Featured theme1={false} />
            <FindProperty theme1={false} />
            <Testimonial theme1={false} />
            {/* <Agents /> */}
            <Blogs theme1={false} />
        </>
    );
};

export default Home;
