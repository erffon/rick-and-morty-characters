import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "Slices/store";
import { useDispatch } from "react-redux";
import { setUserFavourit } from "Slices/slice";


const Header =()=>{

    const userFav = useSelector((state:RootState)=>state.favouritCharacter.favCharacter);
    const dispatch = useDispatch();
    const resetHandler = ()=>{
        dispatch(setUserFavourit("Guest"));
    }
    return(
        <>
            <div className={classes.container}>
                <h2>Hello {userFav} ❤️</h2>
                <button onClick={resetHandler}>reset</button>
            </div>
            
        </>
    );
}
export default Header;