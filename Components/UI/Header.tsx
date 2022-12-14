import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "Slices/store";
import { useDispatch } from "react-redux";
import { setUserFavourit } from "Slices/slice";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const userFav = useSelector(
    (state: RootState) => state.favouritCharacter.favCharacter
  );

  useEffect(() => {
    dispatch(setUserFavourit(document.cookie.split("=")[1] || "Guest"));
  }, []);

  const dispatch = useDispatch();
  const resetHandler = () => {
    dispatch(setUserFavourit("Guest"));
  };

  return (
    <>
      <div className={classes.container}>
        <h2>{`Hello ${userFav} ❤️`}</h2>
        <button onClick={resetHandler}>reset</button>
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};
export default Header;
