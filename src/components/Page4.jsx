import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Page4 = () => {
  return (
    <div className="container rounded-lg w-full bg-white mx-auto py-12 flex flex-col justify-center items-center px-4 ">
      {/* Headings */}
      <div className="text-center mb-8 text-[#25307F]">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <h3 className="text-3xl md:text-5xl mt-2 font-semibold">
          Custom Management Tools for Every Need
        </h3>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 w-[90%]">
        {/* Card Items */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Card 1 */}
          <div className="w-full md:w-[22%] p-4">
            <img
              src={img1}
              alt="Card 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[26%] p-4 h-auto md:h-[290px] mt-3 rounded-3xl flex flex-col items-start justify-center bg-gray-50">
            <h3 className="text-[18px] md:text-[21px] font-bold">
              ERP Systems
            </h3>
            <p className="text-sm md:text-base">
              Centralize your operations with tools designed to manage
              resources, track performance, and optimize productivity.
            </p>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-[22%] p-4">
            <img
              src={img2}
              alt="Card 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[26%] p-4 flex flex-col items-start justify-center h-auto md:h-[290px] mt-3 bg-gray-50 rounded-3xl">
            <h3 className="text-[18px] md:text-[21px] font-bold">
              CRM Platforms
            </h3>
            <p className="text-sm md:text-base">
              Build better customer relationships and boost sales with tailored
              Customer Relationship Management tools.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Card 3 */}
          <div className="w-full md:w-[22%] p-4">
            <img
              src={img3}
              alt="Card 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[26%] p-4 flex flex-col items-start justify-center h-auto md:h-[290px] mt-3 bg-gray-50 rounded-3xl">
            <h3 className="text-[18px] md:text-[21px] font-bold">
              HRMS Solutions
            </h3>
            <p className="text-sm md:text-base">
              Simplify human resource processes, from payroll to employee
              management.{" "}
            </p>
          </div>
          {/* Card 4 */}
          <div className="w-full md:w-[22%] p-4">
            <img
              src={img4}
              alt="Card 4"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[26%] p-4 flex flex-col items-start justify-center h-auto md:h-[290px] mt-3 bg-gray-50 rounded-3xl">
            <h3 className="text-[18px] md:text-[21px] font-bold">
              Custom Dashboards
            </h3>
            <p className="text-sm md:text-base">
              Get real-time analytics with KPI-focused dashboards tailored to
              your business goals.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <h3 className="text-center w-full md:w-[50%] py-8 text-sm md:text-base">
        We create systems that truly work for you—designing metrics to track
        success, streamlining workflows, building scalable foundations, and
        customizing tools to meet your unique business needs.
      </h3>
    </div>
  );
};

export default Page4;
