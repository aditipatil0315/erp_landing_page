import img from "../assets/image.png";

const Page3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-12 bg-white space-y-8 md:space-y-0 md:space-x-12 ">
      <div className="flex-1 text-center md:text-left">
        <h2 className=" md:text-xl font-bold text-[#25307F] mb-2">
          About
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Custom Management Tools for Every Need.{" "}
          <span className="text-[#25307F]">
            {" "}
            We develop solutions for every type of business
          </span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          We create tailored tools to streamline and optimize your business.
          From ERP systems for managing resources and boosting productivity to
          CRM platforms for improving customer relationships and sales, we cover
          it all. Our solutions include HRMS tools, inventory management,
          workflow automation, sales and marketing automation, and custom
          dashboards for real-time analytics.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="relative rounded-lg overflow-hidden w-full md:w-1/2">
          <img
            src={img}
            alt="Healthcare Staff"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-base md:text-lg font-bold text-[#25307F] mb-4 text-center md:text-left">
            Why Us
          </h2>
          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            <li className="flex items-start space-x-2">
              <span className="text-[#25307F]">&#10003;</span>
              <span>Automate repetitive tasks and streamline workflows.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#25307F]">&#10003;</span>
              <span>Centralize communication and task management.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#25307F]">&#10003;</span>
              <span>Track KPIs and drive decisions with real-time, custom dashboards.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#25307F]">&#10003;</span>
              <span>Build only what you need—no extra features or costs.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#25307F]">&#10003;</span>
              <span>Dependable post-launch support and updates</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page3;