import classes from "./Header.module.css";


const Header =()=>{
    return(
        <>
            <div className={classes.container}>
                <h2>Hello Guest 👋</h2>
                <button>reset</button>
            </div>
            
        </>
    );
}
export default Header;