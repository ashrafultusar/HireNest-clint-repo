import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Jobcard from "./Jobcard";

const TabCatagorey = ({ jobs }) => {
  return (
    <div>
      <Tabs>
        <div className="container  px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
            Browse Jobs By Categories
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
            Three categories available for the time being. They are Web
            Development, Graphics Design and Digital Marketing. Browse them by
            clicking on the tabs below.
          </p>

          <div className="flex items-center justify-center">
            <TabList>
              <Tab>Web</Tab>
              <Tab>Graphics</Tab>
              <Tab>Digital</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 xl:mt-16">
            {
              jobs.map(job=> <Jobcard key={job._id} job={job}></Jobcard>)
           }
           </div>
          </TabPanel>
          <TabPanel>
            <Jobcard></Jobcard>
          </TabPanel>
          <TabPanel>
            <Jobcard></Jobcard>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCatagorey;
