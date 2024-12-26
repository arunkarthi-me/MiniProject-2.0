
import Search from "./Search Components/Search"
import Navbar from "./Main Components/Navbar"
// import TopPlaces from "./Search Components/Topplaces"
import Footer from "./Main Components/Footer"
import MostWanted from "./Search Components/Mostwanted"



export default function Main(){
    return(
        <>
        <Navbar/>
        <Search/>
        <MostWanted  value={"The places visited the most this year. Grab the tickets and enjoy with your loved ones"}/>
        <MostWanted/>
        {/* <TopPlaces/> */}
        <Footer/>
        </>
    )
}