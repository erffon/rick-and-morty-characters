import Link from "next/link";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "Slices/store";
import classes from "./home.module.css";

const Home = () => {

  const userFav= useSelector((state:RootState)=>{state.favouritCharacter.favCharacter});

  return (
    <Fragment>
      {/* Header section */}
      <div className={classes.header}>
        <h1>Rick and Morty APIs</h1>
      </div>
      {/* Main Body */}
      <div className={classes.main}>
        <h2>{`Hello ${userFav} ❤️`}</h2> 
      </div>
      {/* Buttons section */}

      <div className={classes.navigation}>
        <p>choose and option:</p>
        <div className={classes.buttons}>
          <Link href="/characters">
            <button>characters</button>
          </Link>
          <Link href="/locations">
            <button>locations</button>
          </Link>
        </div>
      </div>
      </Fragment>
  );

};
export default Home;
