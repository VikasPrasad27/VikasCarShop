import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [buyCarDropdownOpen, setBuyCarDropdownOpen] = useState(false);
  const [sellCarDropdownOpen, setSellCarDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md text-black">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-2xl font-bold text-red-600 flex items-center">
          VikasCarShop
        </Link>

        <div className="relative">
          <button
            onMouseEnter={() => setLocationDropdownOpen(!locationDropdownOpen)}
            onMouseLeave={() => setLocationDropdownOpen(!locationDropdownOpen)}
            className="flex items-center px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100"
          >
            Pimpri <span className="ml-2">&#9660;</span>
          </button>
          {locationDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">Pune</li>
              <li className="px-4 py-2 hover:bg-gray-100">Mumbai</li>
              <li className="px-4 py-2 hover:bg-gray-100">Delhi</li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4 flex-grow max-w-lg mx-auto relative">
  <input
    type="text"
    placeholder="Search Car"
    className="w-full px-4 py-2 pr-12 border border-gray-400 rounded-full focus:outline-none focus:border-gray-500"
  />
  <img
    src="https://cdn.hugeicons.com/icons/search-01-bulk-rounded.svg"
    alt="Search Icon"
    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
  />
</div>

     
      <ul className="flex items-center space-x-6">
        <li className="relative">
          <button
            onMouseEnter={() => setBuyCarDropdownOpen(!buyCarDropdownOpen)}
            onMouseLeave={() => setBuyCarDropdownOpen(!buyCarDropdownOpen)}
            className="hover:text-gray-600"
          >
            Buy Car <span className="ml-1">&#9660;</span>
          </button>
          {buyCarDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/buy-car/new">New Cars</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/buy-car/used">Used Cars</Link></li>
            </ul>
          )}
        </li>

        <li className="relative">
          <button
           onMouseEnter={() => setSellCarDropdownOpen(!sellCarDropdownOpen)}
           onMouseLeave={() => setSellCarDropdownOpen(!sellCarDropdownOpen)}
            className="hover:text-gray-600"
          >
            Sell Car <span className="ml-1">&#9660;</span>
          </button>
          {sellCarDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/sell-car/private">Private Sale</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/sell-car/dealer">Dealer Sale</Link></li>
            </ul>
          )}
        </li>

        <li className="relative">
          <button
            onMouseEnter={() => setMoreDropdownOpen(!moreDropdownOpen)}
            onMouseLeave={() => setMoreDropdownOpen(!moreDropdownOpen)}
            className="hover:text-gray-600"
          >
            More <span className="ml-1">&#9660;</span>
          </button>
          {moreDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/about">About</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services">Services</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </li>

        <li>
            <Link to="/shortlisted" className="hover:text-gray-600 ">
            <img className="ml-6" src="https://cdn.hugeicons.com/icons/favourite-duotone-rounded.svg" alt="" />
             Shortlisted
          </Link>
        </li>

        <li className="relative">
          <button
            onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
            className="hover:text-gray-600"
          >
           <img className='ml-6' src="https://cdn.hugeicons.com/icons/account-setting-03-stroke-rounded.svg" alt="" /> Account <span className="ml-1">&#9660;</span>
          </button>
          {accountDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
            </ul>
          )}
        </li>

        <li className="ml-4 flex flex-col ">
          <span className="text-gray-600 font-semibold">Call us at</span> <a href="tel:7277277275" className="text-gray-800 font-bold">7483292903</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
