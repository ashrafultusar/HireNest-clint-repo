
import { useLoaderData } from 'react-router-dom';
import TabCatagorey from '../Component/TabCatagorey';
import Banner from '../Component/Banner';

const Home = () => {
 
    return (
        <div>
            {/* <Carousel></Carousel> */}
            <Banner></Banner>
            <TabCatagorey></TabCatagorey>
        </div>
    );
};

export default Home;