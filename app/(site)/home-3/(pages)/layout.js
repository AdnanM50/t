import Footer from '../../../../components/theme1/footer';
import Header from '../../../../components/theme1/header';

const Layout = ({ children }) => {
    return (
        <>
            <Header theme1={false}/>
            
            {children}
            <Footer theme1={false}/>
        </>
    );
};

export default Layout;
