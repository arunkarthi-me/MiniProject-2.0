 // NewArrival.jsx
import React from 'react';
import img1 from '../Assets/1.jpg';
// import img2 from '../Assets/6.jpeg';
// import img3 from '../Assets/7.jpeg';
// import img4 from '../Assets/8.jpeg';

const NewArrival = () => {
  const images = [img1, img1, img1, img1];

  return (
    <div className="p-5">
      <h2 className="py-5 font-bold text-2xl">New Arrival</h2>
      <div className="flex justify-around flex-wrap">
        {images.map((src, idx) => (
          <div key={idx} className="relative flex-basis-1/5 m-2 md:m-4"> {/* Add margin here */}
            <img width="250" height="200" src={src} alt={`New Arrival ${idx + 1}`} />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white bg-green-600 font-semibold text-gray-200 border-none rounded-md hover:bg-green-500 transition duration-300 ease-in-out md:gap-7 hover:opacity-100">
              Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
