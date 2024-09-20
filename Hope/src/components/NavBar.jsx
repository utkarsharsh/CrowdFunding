import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Show login/signup by default
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-bluefive text-textbrown font-medium p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Name */}
        <div className="text-4xl text-black font-bold">
          <NavLink to="/" className="hover:text-secondary">
            ᕼOᑭE
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer ${isActive ? 'underline' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/donate" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer ${isActive ? 'underline' : ''}`}
          >
            Donate
          </NavLink>
          <NavLink 
            to="/report-fraud" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer ${isActive ? 'underline' : ''}`}
          >
            Report Fraud
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer ${isActive ? 'underline' : ''}`}
          >
            About
          </NavLink>
        </div>

        {/* Login/Signup or Profile */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              {/* Login Button */}
              <button 
                className="bg-transparent border border-blueone text-blueone px-4 py-2 rounded hover:bg-blueone hover:text-white transition duration-300"
              >
                 <NavLink to='/login'>Login</NavLink>
              </button>

              {/* Signup Button */}
              <button 
                className="bg-blueone text-white px-4 py-2 rounded hover:bg-transparent hover:text-blueone border border-blueone transition duration-300"
              >
                 <NavLink to="/signup">Signup</NavLink>
              </button>
            </>
          ) : (
            <NavLink 
              to="/profile" 
              className="text-3xl cursor-pointer"
            >
              <FaUserCircle />
            </NavLink>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-xl focus:outline-none"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary flex flex-col items-center space-y-4 py-4">
          <NavLink 
            to="/" 
            className="block text-center px-4 py-2 w-full"
          >
            Home
          </NavLink>
          <NavLink 
            to="/donate" 
            className="block text-center px-4 py-2 w-full"
          >
            Donate
          </NavLink>
          <NavLink 
            to="/report-fraud" 
            className="block text-center px-4 py-2 w-full"
          >
            Report Fraud
          </NavLink>
          <NavLink 
            to="/about" 
            className="block text-center px-4 py-2 w-full"
          >
            About
          </NavLink>
          {!isLoggedIn ? (
            <>
              {/* Mobile Login Button */}
              <button 
                className="bg-transparent border border-blueone text-blueone px-4 py-2 rounded w-full hover:bg-blueone hover:text-white transition duration-300"
              >
              <NavLink to='/login'>Login</NavLink>
                
              </button>

              {/* Mobile Signup Button */}
              <button  
                className="bg-blueone text-white px-4 py-2 rounded w-full hover:bg-transparent hover:text-blueone border border-blueone transition duration-300"
              >
                 <NavLink to="/signup">Signup</NavLink>
              </button>
            </>
          ) : (
            <NavLink 
              to="/profile" 
              className="block text-center px-4 py-2 hover:bg-secondary w-full cursor-pointer"
            >
              My Profile
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
