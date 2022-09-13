import Filter from "../../public/Components/UI/Filter";
import Header from "../../public/Components/UI/Header";
import Pagination from "../../public/Components/UI/pagination";
import Searchbar from "../../public/Components/UI/Searchbar";

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