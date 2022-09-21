import { characterResults, Result } from "../characterTypes";
import { GetStaticProps } from "next";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserFavourit } from "Slices/slice";
import { RootState } from "Slices/store";
import classes from "./home.module.css";
import CharacterCard from "@Components/UI/CharacterCard";
import styles from "./characters/characters.module.css";

const Home = ({ results }: { results: Result[] }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserFavourit(document.cookie.split("=")[1] || "Guest"));
  }, []);

  const userFav = useSelector(
    (state: RootState) => state.favouritCharacter.favCharacter
  );

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
          <Link href="/characters?page=1">
            <button>characters</button>
          </Link>
          <Link href="/locations?page=1">
            <button>locations</button>
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        {results.slice(0, 6).map((item) => (
          <CharacterCard
            imageSrc={item.image}
            charName={item.name}
            linkHref={`characters/${item.id}`}
          />
        ))}
      </div>
    </Fragment>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?name=rick"
  );
  const { results }: characterResults = await response.json();

  return {
    props: {
      results,
    },
  };
};
