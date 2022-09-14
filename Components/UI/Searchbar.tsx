import classes from "./Searchbar.module.css";

const Searchbar = ()=>{
    return(
        <div className={classes.container}>
            <input className={classes.search} type="text" name="searchbar" placeholder="search..."/>
        </div>
    );
        
        
}
export default Searchbar;