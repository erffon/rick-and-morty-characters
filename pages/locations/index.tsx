import Header from "@UI/Header";
import Pagination from "@UI/Pagination";
import classes from "./locations.module.css";
import Head from "next/head";
import LocationCard from "@Components/UI/LocationCard";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import { LocationResults } from "locationTypes";

export const getStaticProps:GetStaticProps = async ()=>{
  const res = await fetch("https://rickandmortyapi.com/api/location");
  const {results}:LocationResults = await res.json();

  return {
    props : {
      locationsList : results
    }
  }
}


const DYMMY_LOCATIONS = ["earth", "venus", "oranus", "jupiter"];

const locations = ({locationsList}:{locationsList:Result[]}) => {

  const [searchTerm,setSearchTerm] = useState('');

    const searchHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setSearchTerm(event.target.value);
    }

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
            <input onChange={searchHandler} className={classes.search} type="text" name="searchbar" placeholder="search..."/>
      </div>
      <div className={classes.container}>
        {locationsList.filter((loc)=>{
          if (searchTerm==""){
            return loc;
          } else if (loc.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return loc;
          }
        }).map((item) => {
          return <li key={item.id}>{<LocationCard location={item.name.substring(0,10)}/>}</li>;
        })}
      </div>
      <Pagination />
    </>
  );
};


export default locations;
