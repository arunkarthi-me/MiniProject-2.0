 
 
import { useLocation } from 'react-router-dom';
import img1 from '../Assets/1.jpg';  
import MostWanted from '../Search Components/Mostwanted';


const DetailsPage = () => {
  const location = useLocation();
  const { image } = location.state;  

   const accommodations = ['Travel Booking','Password and Visa Arrangement','Personal Driver','Food','Room Arrangement']

  return (
    <div className="p-5">
      <p className='text-3xl font-bold '>Explore the city of   {image.placename}</p>
      <div className="flex flex-wrap">
        {/* First image occupying 2/4 */}
        <div className="w-3/6 p-2">
          <img src={image.header} alt="hotel" className="rounded-lg w-full h-72" />
           
        </div>
        
        {/* Second and third images occupying 1/4 each */}
        <div className="w-3/6 p-2">
          <img src={image.subheader} alt="hotel" className="rounded-lg w-full h-72" />
        </div>
        <div className="w-2/6 p-2">
          <img src={image.room} alt="hotel" className="rounded-lg w-full h-52" />
        </div>
        
        {/* Fourth and fifth images occupying 1/4 each */}
        <div className="w-2/6 p-2">
          <img src={image.famousplace} alt="hotel" className="rounded-lg w-full h-52" />
        </div>
        <div className="w-2/6 p-2">
          <img src={image.commonplace} alt="hotel" className="rounded-lg w-full h-52" />
        </div>
      </div>

      {/* Paragraph about the hotel */}
      <p className="py-5 text-lg">This is an awesome place to stay with incredible services and views.</p>

      {/* Unordered list with 5 empty items */}
      <ul className="   border p-4 border-gray-500 rounded-md list-none font-semibold ">
       
       {accommodations.map(function(items){
        return(
          <>
                  <li className="px-2 py-2 shadow-md text-lg bg-gray-200 border-none rounded-md w-full mt-3">{items}</li>

          </>
        )
       })}

         
      </ul>

      <MostWanted value={"Some recommendation for similar places ->"}/>

       {/* <p className="py-5 text-lg font-bold">You can ask five questions before proceeding with the process:</p> */}
    </div>
  );
};

export default DetailsPage;
