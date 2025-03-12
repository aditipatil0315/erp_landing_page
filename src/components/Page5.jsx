import imgbtm from '../assets/image5.png';

const Page5 = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      
      <div className="left md:w-1/2 flex justify-center items-center p-6">
        <img
          src={imgbtm}
          alt="Placeholder"
          className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      
      <div className="right md:w-1/2 p-9 flex flex-col justify-center bg-white">
        <h1 className="text-2xl md:text-3xl text-[#25307F] mb-2">📞 <br /> Contact us today to schedule a free consultation.</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#25307F] tracking-tight">
         Fill out the form below, We are <br /> here to help
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25307F]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25307F]"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25307F]"
          />
          <button
            type="submit"
            className="w-full md:w-[120px] p-3 bg-[#25307F] text-white rounded-lg focus:outline-none hover:bg-[#1d276f] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page5;