import Navbar from "./Main Components/Navbar"
import Header from "./Main Components/Header"
import Service from "./Main Components/Service"
import Newarrival from "./Main Components/Newarrival"
// import Mostwanted from "./Main Components/Mostwanted"
import Subcribe from "./Main Components/Subcribe"
import Footer from "./Main Components/Footer"


export default function App(){
    return(
        <>
        
           <Navbar/> 
           <Header/>
           <Service/>
           <Newarrival/>
           
           <Subcribe/>
           <Footer/>
        </>
    )
}