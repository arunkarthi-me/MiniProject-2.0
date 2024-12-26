 // Header.jsx
import React from 'react';
import Mainimg from '../Assets/1.jpg' 

const Header = () => {
  return (
    <header className="flex justify-center gap-12 p-12">
      <div>
        <h1>Book Your Adventures</h1>
        <p>Explore Around The World</p>
        <button className="px-5 py-2.5 mt-2 bg-gray-800 text-white rounded border-black rounded-md cursor-pointer">Book Now</button>
      </div>
      <div>
        <img src={Mainimg} width="280" height="240" alt="Adventure" />
      </div>
    </header>
  );
};

export default Header;
