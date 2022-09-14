import Filter from "@UI/Filter";
import Header from "@UI/Header";
import Pagination from "@UI/Pagination";
import Searchbar from "@UI/Searchbar";

const DUMMY_CHARACTERS = ['rick','morty','jerry','summer'];

const characters = ()=>{
    return(
        <>
            <Header/>
            <Filter/>
            <Searchbar/>
            {DUMMY_CHARACTERS.map((item,index)=>{
                return <li key={index}>{item}</li>;
            })}
            <Pagination/>
        </>
    );
}
export default characters;