import { useState } from "react";
import classes from "./Pagination.module.css";

interface QueryFunc {
    paginationQuery :(current:number)=>void
}
const Pagination = ({paginationQuery}:{paginationQuery:QueryFunc})=>{
    const [currentPage,setCurrentPage] = useState(1);
    
    const nextHandler = ()=>{
        setCurrentPage(currentPage+1);
        
    }
    const previousHandler = ()=>{
        setCurrentPage(currentPage-1);
    }

    return(
        <div className={classes.container}>
            <button onClick={previousHandler}>&#129044; Previous</button>
            <button onClick={nextHandler}>Next &#129046;</button>
            
        </div>
    );
}

export default Pagination;