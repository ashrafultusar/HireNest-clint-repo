
import { useLoaderData } from 'react-router-dom';
import TabCatagorey from '../Component/TabCatagorey';

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);

    return (
        <div>
            {/* <Carousel></Carousel> */}
            <TabCatagorey jobs={jobs}></TabCatagorey>
        </div>
    );
};

export default Home;