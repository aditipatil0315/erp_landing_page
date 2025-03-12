import img7 from '../assets/image 7.png'
import Navbar from './Navbar'

const Page1 = () => {
  return (
    <div className='Page1 w-full h-[100vh] '>

        <img src={img7} className=' absolute top-0 left-0 z-[-10]' />
        <div className="content h-[360px] md:h-[280px] w-[800px] p-7 backdrop-blur-lg bg-white bg-opacity-45 rounded-2xl  ">
            <h1 className='md:text-4xl text-md'>Transform Hospital Operations with Our <br /> <span className='text-[#263281]'>All-in-One Management Portal </span></h1>
            <h3 className='md:text-[20px] text-sm'>Streamline workflows, enhance patient care, and optimize <br /> revenue with role-based access for Admin, Reception, and <br />Doctors.</h3>
            <br />
            <button className='bg-[#263180] px-5 py-2 rounded-3xl text-white'>See More</button>

        </div>

        <div className="icons absolute md:top-[770%] top-[650%] md:left-[5%] left-[10%]  flex items-center justify-center gap-3 text-white">
          
          <i className="fa-regular fa-circle-play text-[45px]  "></i>
          <h3>Explore more</h3>
            
        </div>
        

    </div>
  )
}

export default Page1