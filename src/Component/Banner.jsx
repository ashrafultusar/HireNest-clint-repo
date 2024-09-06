import { Link } from "react-router-dom";
import video from "../assets/images/19722976-uhd_2560_1440_30fps.mp4";

const Banner = () => {
  return (
    <div>
      <div className="hero lg:h-[720px] md:h-[450px] container mx-auto relative">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="hero-overlay bg-opacity-30"></div>

        {/* Content */}
        <div className="hero-content  text-neutral-content text-center relative z-10 ">
          <div>
            
            <h1 className="my-2 text-5xl font-bold">
              FIND THE PERFECT <span className="text-[#d94529]">JOB</span>
                      </h1>
                      <p className="text-xl font-medium ">Your Dream Job is Just a Click Away!</p>
           <Link to={'/jobs'}> <button className="px-3 py-2 rounded-md text-white bg-[#ef8f1c] my-2 ">Click Here</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
