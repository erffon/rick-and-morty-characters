import classes from "./characters.module.css";
import Header from "@UI/Header";
import Pagination from "@UI/Pagination";
import Head from "next/head";
import CharacterCard from "@UI/CharacterCard";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import { characterResults, Result } from "characterTypes";

const DUMMY_CHARACTERS = [
  "rick",
  "morty",
  "jerry",
  "zizi",
  "akbar",
  "summer",
  "morty",
  "jerry",
  "xoxo",
  "zolfaghar",
  "summer",
  "morty",
  "jerry",
  "summer",
  "boldozer",
  "morty",
  "jerry",
  "summer",
];

const characters = ({ charactersList }: { charactersList: Result[] }) => {
  //search bar handling
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  //filters handling
  const [azSorting, setAzSorting] = useState(true);

  const azHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "z - a") {
      setAzSorting(false);
    } else if (event.target.value === "a - z") {
      setAzSorting(true);
    }
  };
  const DUMMY2 = azSorting
    ? DUMMY_CHARACTERS.sort()
    : DUMMY_CHARACTERS.sort().reverse();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </Head>
      <Header />

      {/* Search bar */}
      <div className={classes.searchbar}>
        <input
          onChange={searchHandler}
          className={classes.search}
          type="text"
          name="searchbar"
          placeholder="search..."
        />
      </div>

      {/* Filter section*/}
      <div className={classes.filters}>
        <i className="fi fi-rr-filter"></i>
        <label htmlFor="sorting">sort :&nbsp;</label>
        <select onChange={azHandler} id="sorting" className="sorting">
          <option>a - z</option>
          <option>z - a</option>
        </select>

        <label htmlFor="gender">gender :&nbsp;</label>
        <select id="gender" className="gender">
          <option>human</option>
          <option>robot</option>
          <option>alien</option>
          <option>animal</option>
        </select>
      </div>

      {/** characters list */}
      <div className={classes.container}>
        {DUMMY2.filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return item;
          }
        })
          .map((item, index) => {
            return (
              <li key={index}>
                {
                  <CharacterCard
                    imageSrc={
                      "https://images.unsplash.com/photo-1592564630984-7410f94db184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80"
                    }
                    charName={item}
                    linkHref={""}
                  />
                }
              </li>
            );
          })
          .sort()}
      </div>

      <Pagination />
    </>
  );

  export const getStaticProps:GetStaticProps = async  () =>{
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await res.json();

    return {
      props: {
        charactersList: results,
      },
    };
  };
};
export default characters;
