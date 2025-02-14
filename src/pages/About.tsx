import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/about-us-banner.jpg";
import about_circle from "../assets/circle_about.png";
import double_circle from "../assets/double_circle.png";
import { aboutData } from "../data/about";
import { goToTop } from "../utility/goToTop";
import Span from "../components/Span";
const About = () => {
  goToTop();
  return (
    <Layout>
      <ReactHelmet title={"About Us"} />
      <Common_Hero bg={bg} />
      <div className="mt-0 lg:-mt-80 bg-white shadow-3xl container px-mobileContainer xl:px-0 mb-8 lg:mb-10 xl:mb-5 pb-16 xl:pb-28">
        <div className="pt-10 xl:pt-20 text-center">
          <h1 className="text-primary font-bold text-2xl xl:text-[40px] mb-[22px] font-poppins">
            About Us
          </h1>
          <p className="text-primary font-medium mb-[19px] text-base font-inter">
            Sky is not the limit, we are ready when you are
          </p>
          <Span />
        </div>
        <div className="xl:px-48 text-center">
          <div
            style={{ backgroundImage: `url(${about_circle})` }}
            className="bg-no-repeat pb-[68px] bg-contain  bg-[center_top_0px]  pt-[80px] "
          >
            <h1 className="font-bold text-2xl text-primary font-inter">
              <span className="font-normal">WE ARE</span> KM AIR AVIATION LTD.
            </h1>
          </div>
          <p className="text-primary font-medium font-inter text-sm leading-7">
            KM Air Aviation Ltd. is a leading name in the aviation industry,
            committed to providing top-notch air travel experiences for
            passengers around the world. As a premier airline, we pride
            ourselves on our dedication to safety, comfort, and convenience. Our
            story began with a vision to transform air travel into an
            unforgettable journey, and today, we continue to pursue excellence
            in everything we do.
          </p>
        </div>
      </div>
      <div className="container px-mobileContainer xl:px-0 flex flex-col lg:flex-row mb-[136px] gap-5">
        <div className="lg:basis-[60%] h-[480px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Mn82ya2Mx3U?autoplay=1"
            title="KM Air Aviation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="basis-[40%] h-[480px] bg-white  drop-shadow-md px-10 ">
          <div
            style={{ backgroundImage: `url(${double_circle})` }}
            className=" flex justify-center w-full bg-no-repeat bg-[80%] text-right-top bg-[length:100px_100px] pb-6 lg:pb-12 lg:pt-20"
          >
            <h1 className="font-bold lg:text-2xl text-primary text-center">
              WHY CHOOSE US
            </h1>
          </div>
          <p className="text-primary text-xs text-center font-medium mx-auto font-inter">
            SAFETY IS THE DRIVING FORCE BEHIND <br /> EVERYTHING WE DO AT TRUCKY
            TRANSPORTATION COMPANY.{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-14 gap-5">
            {aboutData.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col items-center justify-center">
                  <img src={data?.img} alt="KM" className="mx-auto mb-3" />
                  <h2 className="text-center text-primary font-bold font-inter">
                    {data?.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
