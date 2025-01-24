import React from 'react'

const Navbar = () => {
  return (
    <div className='nav_container h-[10vh] w-full flex justify-center items-center '>
        <div className="navbar h-full w-full bg-transparent flex justify-between items-center px-12 py-16  text-[18px] font-semibold text-white">
            <h3>logo</h3>
            <div className="items flex items-center gap-7">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Product</a>
                <a href="">Contact Us</a>
            </div>

            <button>Login</button>
        </div>
        

    </div>
  )
}

export default Navbar