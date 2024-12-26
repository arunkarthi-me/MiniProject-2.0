 
 
import { useNavigate } from 'react-router-dom';
 import img1sub from '../DS_images/Hawaii/hawaii-honolulu-beach.jpeg'
import img1header from '../DS_images/Hawaii/hawaii-main.jpg'
import img1place from '../DS_images/Hawaii/hawaii-Oahu.jpg'
import img1fplace from '../DS_images/Hawaii/hawaii-Farmers-Market.jpg'
import img1room from '../DS_images/Hawaii/hawaii-room.jpg'
import img2sub from '../DS_images/China/china-greatwall.jpg'
import img2header from '../DS_images/China/china-main.jpg'
import img2place from '../DS_images/China/china-themepark.jpg'
import img2fplace from '../DS_images/China/china-food.jpg'
import img2room from '../DS_images/China/china-room.jpg'
import img3sub from '../DS_images/Dubai/underwateraquarium.jpg'
import img3header from '../DS_images/Dubai/dubai-main.jpg'
import img3place from '../DS_images/Dubai/swimming-pool.jpg'
import img3fplace from '../DS_images/Dubai/dubai-camel-ride.jpeg'
import img3room from '../DS_images/Dubai/dubai-room.jpg'
import img4sub from '../DS_images/Egypt/egypt-pyramid-giza.png'
import img4header from '../DS_images/Egypt/Egypt-main.jpg'
import img4place from '../DS_images/Egypt/egypt-resort.jpeg'
import img4fplace from '../DS_images/Egypt/egypt-food.jpeg'
import img4room from '../DS_images/Egypt/egypt-room.jpg'
















const MostWanted = ({ value }) => {
  const navigate = useNavigate();
   const imagesContainer = [
    {header: img1header,subheader:img1sub,commonplace:img1place,famousplace:img1fplace,room:img1room, placename:'Hawaii'},
    {header: img2header,subheader:img2sub,commonplace:img2place,famousplace:img2fplace,room:img2room, placename:'China'},
    {header: img3header,subheader:img3sub,commonplace:img3place,famousplace:img3fplace,room:img3room, placename:'Dubai'},
    {header: img4header,subheader:img4sub,commonplace:img4place,famousplace:img4fplace,room:img4room, placename:'Egypt'},
     
    
     
  ];

  const handleImageClick = (image) => {
    navigate('/details', { state: { image } });
  };

  return (
    <div className="p-5">
      <h2 className="py-5 text-2xl font-bold">Most Wanted</h2>
      <p className='text-lg font-bold mb-3'>{value}</p>
      <div className="flex justify-around flex-wrap">
        {imagesContainer.map((src, idx) => (
          <div
            key={idx}
            className="relative flex-basis-1/5 m-2 cursor-pointer"
            onClick={() => handleImageClick(src,idx)} // Redirect on click
          >
            <img
              width="250"
              height="200"
              src={src.header}
              alt="Loading..."
              className="rounded-lg transition-transform transform hover:scale-105 "
            />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-900 text-gray-200 border-none rounded-md hover:bg-gray-700 transition duration-300 ease-in-out hover:opacity-100">
              Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostWanted;
