import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const Page4 = () => {
  return (
    <div className="container rounded-lg bg-[#E9EDF0] mx-auto py-12 absolute w-full top-[325%] flex flex-col justify-center items-center px-4">
      {/* Headings */}
      <div className="text-center mb-8 text-[#25307F]">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Solution</h2>
        <h3 className="text-3xl md:text-5xl mt-2 font-semibold">Hospital Software</h3>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 w-[90%]">
        {/* Card Items */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Card 1 */}
          <div className="w-full md:w-[22%] p-4">
            <img src={img1} alt="Card 1" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-[22%] p-4 h-auto md:h-[290px] mt-3 rounded-3xl flex flex-col items-start justify-center bg-white">
            <h3 className="text-[18px] md:text-[21px] font-bold">Tailored Access for Every Role</h3>
            <p className="text-sm md:text-base">
              Custom dashboards for Admins, Receptionists, and Doctors to manage operations effortlessly.
            </p>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-[22%] p-4">
            <img src={img2} alt="Card 2" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-[22%] p-4 flex flex-col items-start justify-center h-auto md:h-[290px] mt-3 bg-white rounded-3xl">
            <h3 className="text-[18px] md:text-[21px] font-bold">Smart Scheduling</h3>
            <p className="text-sm md:text-base">
              Book, reschedule, or manage appointments with ease and efficiency.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Card 3 */}
          <div className="w-full md:w-[22%] p-4">
            <img src={img3} alt="Card 3" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-[22%] p-4 flex flex-col items-start justify-center h-auto md:h-[290px] mt-3 bg-white rounded-3xl">
            <h3 className="text-[18px] md:text-[21px] font-bold">Revenue Insights</h3>
            <p className="text-sm md:text-base">
              Track earnings across services, rooms, and consultations in real-time.
            </p>
          </div>
          {/* Card 4 */}
          <div className="w-full md:w-[22%] p-4">
            <img src={img4} alt="Card 4" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-[22%] p-4 flex flex-col items-start justify-center h-auto md:h-[290px] mt-3 bg-white rounded-3xl">
            <h3 className="text-[18px] md:text-[21px] font-bold">Patient Management</h3>
            <p className="text-sm md:text-base">
              Access consultation room, treatment progress, medical history, and prescriptions in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <h3 className="text-center w-full md:w-[50%] py-8 text-sm md:text-base">
        HIMS is one of the best digital healthcare solutions for hospitals. Manage appointments, billing, lab, stock and
        inventory, pharmacy, In-patient department and more. Advanced EMR to manage patient health records and deliver
        improved patient care.
      </h3>
    </div>
  );
};

export default Page4;