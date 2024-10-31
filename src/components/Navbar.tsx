import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full z-40 transition-colors duration-300 ${isScrolled ? 'bg-zinc-900/90' : ''}`}>
      <div className="px-4 md:px-16 py-6 flex items-center">
        <img className="h-4 lg:h-7" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo" />
        
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <p className="text-white transition hover:text-gray-300 cursor-pointer">Home</p>
          <p className="text-gray-200 transition hover:text-gray-300 cursor-pointer">Series</p>
          <p className="text-gray-200 transition hover:text-gray-300 cursor-pointer">Films</p>
          <p className="text-gray-200 transition hover:text-gray-300 cursor-pointer">New & Popular</p>
          <p className="text-gray-200 transition hover:text-gray-300 cursor-pointer">My List</p>
        </div>
        
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <Search className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <Bell className="w-6" />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format" alt="Profile" />
            </div>
            <ChevronDown className="w-4 text-white transition" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;