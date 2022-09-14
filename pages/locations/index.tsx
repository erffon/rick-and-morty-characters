import Header from "@UI/Header";
import Searchbar from "@UI/Searchbar";
import Pagination from "@UI/Pagination";

//import LocationResults from "../../types";

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