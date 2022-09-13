import Header from "../../public/Components/UI/Header";
import Searchbar from "../../public/Components/UI/Searchbar";
//import LocationResults from "../../types";
import Pagination from "../../public/Components/UI/pagination";

const DYMMY_LOCATIONS = ['earth','venus','oranus','jupiter'];

const locations = ()=>{
    return(
        <>
            <Header/>
            <h3>Locations:</h3>
            <Searchbar/>
            <ul>
                {DYMMY_LOCATIONS.map((item,index)=>{
                   return <li key={index}>{item}</li>;
                })}
            </ul>
            <Pagination/>
        </>
    );
}
export default locations;