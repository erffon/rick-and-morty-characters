import Header from "@UI/Header";
import classes from "./locations.module.css";
import LocationCard from "@Components/UI/LocationCard";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { LocationResults, Result,Info } from "locationTypes";
import { useRouter } from "next/router";


export const getServerSideProps:GetServerSideProps = async (context)=>{
  const {page} = context.query
  console.log(context.query);
  

  const res = await fetch("https://rickandmortyapi.com/api/location?page="+page);
  const {results}:LocationResults = await res.json();
  
  return {
    props : {
      locationsList : results,
    }
  }
}

const locations = ({locationsList}:{locationsList: Result[]}) => {

  //Pagination handling
  const {query,push} = useRouter();
  const nextPageHandler = ()=>{
    const pageQuery = Number(query.page)+1;
    push("/locations?page="+pageQuery);
    
  }
  const previousPageHandler =()=>{
    const pageQuery = Number(query.page)-1;
    push("/locations?page="+pageQuery);
  }

  //search bar handling
  const [searchTerm,setSearchTerm] = useState('');
  const searchHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setSearchTerm(event.target.value);
  }


  return (
    <>
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
      <div className={classes.pagination}>
            <button onClick={previousPageHandler}>&#129044; Previous</button>
            <button onClick={nextPageHandler}>Next &#129046;</button>
        </div>
    </>
  );
};


export default locations;
