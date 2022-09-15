import classes from "./Pagination.module.css";

const Pagination = ()=>{
    return(
        <div className={classes.container}>
            <button>&#129044; Previous</button>
            <button>Next &#129046;</button>
            
        </div>
    );
}

export default Pagination;