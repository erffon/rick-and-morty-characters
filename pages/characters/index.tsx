import classes from "./characters.module.css";
import Header from "@UI/Header";
import Pagination from "@UI/Pagination";
import Head from "next/head";
import CharacterCard from "@UI/CharacterCard";
import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { characterResults, Result } from "characterTypes";

//SSG characters list fetching
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: characterResults = await res.json();

  return {
    props: {
      charactersList: results,
    },
  };
};

//characters page definition
const characters = ({ charactersList }: { charactersList: Result[] }) => {
  //search bar handling
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  //filters handling
  const [azSorting, setAzSorting] = useState(true);
  const azHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "a - z") {
      setAzSorting(false);
    } else if (event.target.value === "z - a") {
      setAzSorting(true);
    }
  };

  const [genderSorting,setGenderSorting] = useState("all");
  const genderHandler = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setGenderSorting(event.target.value);
  }
  useEffect(()=>{
  },[genderSorting]);

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
        <select onChange={genderHandler} id="gender" className="gender">
          <option>all</option>
          <option>Female</option>
          <option>Male</option>
          <option>Genderless</option>
          <option>unknown</option>
        </select>
      </div>

      {/** characters list */}
      <div className={classes.container}>
        {azSorting &&
          charactersList.filter((character)=>{
            if(genderSorting=="all"){
              return character;
            } else if (character.gender.includes(genderSorting)){
              return character;
            }
          })
            .filter((char) => {
              if (searchTerm == "") {
                return char;
              } else if (
                char.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return char;
              }
            })
            .map((item: any) => {
              return (
                <li key={item.id}>
                  {
                    <CharacterCard
                      imageSrc={item.image}
                      charName={item.name.substring(0, 15)}
                      linkHref={""}
                    />
                  }
                </li>
              );
            })
            .sort()}
        {!azSorting &&
          charactersList
            .map((item: any) => {
              return (
                <li key={item.id}>
                  {
                    <CharacterCard
                      imageSrc={item.image}
                      charName={item.name.substring(0, 15)}
                      linkHref={""}
                    />
                  }
                </li>
              );
            })
            .reverse()}
      </div>
      <Pagination />
    </>
  );
}
export default characters;
