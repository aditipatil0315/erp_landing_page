import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav_container h-[10vh] w-full flex justify-center items-center'>
      {/* Navbar container */}
      <div className="navbar h-full w-full bg-transparent flex justify-between items-center px-12 py-16 text-[18px] font-semibold text-white">
        <h3>logo</h3>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Product</a>
          <a href="">Contact Us</a>
        </div>

        {/* Login button */}
        <button className="hidden md:block">Login</button>

        {/* Hamburger menu (visible only on mobile) */}
        <button
          className="block md:hidden text-white z-50" // Ensures button stays above blur
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-40">
          <div className="flex flex-col gap-8 text-white text-xl font-semibold items-center">
            <a href="" onClick={toggleMenu}>Home</a>
            <a href="" onClick={toggleMenu}>About</a>
            <a href="" onClick={toggleMenu}>Product</a>
            <a href="" onClick={toggleMenu}>Contact Us</a>
            <button onClick={toggleMenu}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;